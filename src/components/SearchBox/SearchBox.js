import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import './SearchBox.scss';
import {useState} from "react";
import {useQuery} from "@apollo/client";
import {REPOSITORIES_NAME} from "../../graphql/queries/repositoriesName";
import {RepositoryListCard} from "../RepositoriesListCard/RepositoryListCard";

export const SearchBox = () => {
    const [searchedName, setSearchedName] = useState('');
    const { loading, error, data } = useQuery(REPOSITORIES_NAME);
    const findRepoByName = data?.viewer.repositories.nodes.find(node => node.name === searchedName)
    console.log(findRepoByName)
    return (
        <div className="searchBox-container">
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  gap: 4}}>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <GitHubIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField id="input-with-sx"
                               label="Type repository name"
                               variant="standard"
                               onChange={(e) => {
                                   setSearchedName(e.target.value)
                               }}
                    />
                </Box>
                <Box>
                    {findRepoByName  ? <RepositoryListCard  repositoryName={findRepoByName.name}/> : ''}
                </Box>
            </Box>
        </div>

    );
}