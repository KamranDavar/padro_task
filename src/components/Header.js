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
                    <Toolbar sx={styles.toolbar}>
                        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={styles.breadcrumb}>
                            <Link to="/" style={styles.link}>
                                <Typography >
                                    Task Management
                                </Typography>
                            </Link>
                            <Typography sx={styles.link}>{currentPage}</Typography>
                        </Breadcrumbs>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

const styles = {
    toolbar: {paddingLeft: '0px !important',  },
    breadcrumb:{color: "white"},
    link: {
        textDecoration: 'none',
        color: "white",
    }
}
