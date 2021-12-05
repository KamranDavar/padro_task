import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export function Header() {

    const currentPageName="Home" //TODO should get from global state
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link  to="/">
                            Task Management
                        </Link>
                        <Typography color="text.primary">{currentPageName}</Typography>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
