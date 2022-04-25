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
    const [value, setValue] = React.useState(0);
    const { loading, error, data } = useQuery(VIEWER_LOGIN);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Card sx={{ minWidth: 275, margin: 8 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, margin: 2 }} color="text.secondary" gutterBottom>
                    {data?.viewer?.login}
                </Typography>
                <Typography sx={{ margin: 2 }} variant="h5" component="div">
                    Github Repository Browser
                </Typography>

                <Typography sx={{ margin: 2, padding: 2, fontSize: 16 }} variant="body2">
                    <span>Total commits: 12 </span>
                    <br />
                    Total issues: 3
                    <br/>
                    Total releases: 2
                </Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="List of commits" {...a11yProps(0)} />
                        <Tab label="List of issues" {...a11yProps(1)} />
                        <Tab label="list of releases" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </CardContent>
        </Card>
    );
}