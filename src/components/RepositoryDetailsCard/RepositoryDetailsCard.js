import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import {useQuery} from "@apollo/client";
import {VIEWER_LOGIN} from "../../graphql/queries/viewerLogin";
import {useParams} from "react-router";
import {REPOSITORY_DETAILS} from "../../graphql/queries/repositoryDetails";
import CircularProgress from "@mui/material/CircularProgress";
import {List, ListItem} from "@mui/material";
import {useState} from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const RepositoryDetailsCard = (props) => {
    const { name } = useParams();
    const [value, setValue] = React.useState(0);
    const [detailsData, setDetailsData] = useState(null);
    const { loading: userLoading, error: userError, data: userData } = useQuery(VIEWER_LOGIN);
    const { loading: repositoryDetailsLoading, data: repositoryDetailsData } = useQuery(REPOSITORY_DETAILS, {
        variables: { name: name }
    })
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const findRepoByName = repositoryDetailsData?.viewer.repositories.nodes.find(node => node.name === name)

    return (
        repositoryDetailsLoading ?
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box> :
            (
        <Card sx={{ minWidth: 275, margin: 8 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, margin: 2 }} color="text.secondary" gutterBottom>
                    {userData?.viewer?.login}
                </Typography>
                <Typography sx={{ margin: 2 }} variant="h5" component="div">
                    {name}
                </Typography>

                <Typography sx={{ margin: 2, padding: 2, fontSize: 16 }} variant="body2">
                    Total commits: {repositoryDetailsData?.viewer?.repository?.object?.history?.totalCount}
                    <br />
                    Total issues: {findRepoByName?.issues.totalCount}
                    <br/>
                    Total releases: {findRepoByName?.releases.totalCount}
                </Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="List of commits" {...a11yProps(0)} />
                        <Tab label="List of issues" {...a11yProps(1)} />
                        <Tab label="list of releases" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {repositoryDetailsData?.viewer.repository.object.history.totalCount == 0 ? 'There is nothing here' : (
                        <List>
                            {repositoryDetailsData?.viewer.repository.object.history.nodes.map( v => {
                                return (
                                    <ListItem key={v.id} divider={true}>
                                        {v.message}
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    )}

                </TabPanel>
                <TabPanel value={value} index={1}>
                    {findRepoByName.issues.totalCount == 0 ? 'There is nothing here' : (
                        <List>
                            {findRepoByName.issues.nodes.map( v => {
                                return (
                                    <ListItem key={v.id} divider={true}>
                                        {v.number}
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {findRepoByName.releases.totalCount == 0 ? 'There is nothing here' : (
                        <List>
                            {findRepoByName.releases.nodes.map( v => {
                                return (
                                    <ListItem key={v.id} divider={true}>
                                        {v.name}
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    )}
                </TabPanel>
            </CardContent>
        </Card>
    ));
}