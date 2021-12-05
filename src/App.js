import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Box, CircularProgress} from '@mui/material';
import {AppRouter} from './routing';
import {StateProvider} from './GlobalState/store';


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
            <StateProvider>
                <ThemeProvider theme={theme}>
                    <AppRouter/>
                </ThemeProvider>
            </StateProvider>
        </React.Suspense>
    );
}