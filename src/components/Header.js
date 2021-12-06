import * as React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import {store} from '../globalState/store';

export function Header() {
    const globalState = useContext(store);
    const {currentPage} = globalState.state;
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Container>

                    <Toolbar>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to="/">
                                Task Management
                            </Link>
                            <Typography color="text.primary">{currentPage}</Typography>
                        </Breadcrumbs>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
