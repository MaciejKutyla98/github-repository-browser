import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import './SearchBox.scss';

export const SearchBox = () => {
    return (
        <div className="searchBox-container">
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <GitHubIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Type repository name" variant="standard"/>
            </Box>
        </div>

    );
}