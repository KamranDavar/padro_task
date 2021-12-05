import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Box, CircularProgress} from '@mui/material';
import {AppRouter} from './routing';


export default function App() {

    const theme = createTheme({
        palette: {},
    });
    const Loading = (<Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    }}>
        <CircularProgress/>
    </Box>);

    return (
        <React.Suspense fallback={Loading}>
            <ThemeProvider theme={theme}>
                <AppRouter/>
            </ThemeProvider>
        </React.Suspense>
    );
}