import React from 'react';
import {Box, CircularProgress} from '@mui/material';
import {AppRouter} from './routing';
import {StateProvider} from './globalState/store';
import theme from './theme '
import {ThemeProvider} from '@mui/material/styles';


export default function App() {

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