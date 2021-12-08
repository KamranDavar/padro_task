import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
const fontFamily= [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',')

theme.typography.h6 = {
    fontSize: '0.8rem',
    fontWeight: '700',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
    },
};
theme.typography.h5 = {
    fontSize: '0.9rem',
    fontWeight: '700',
    fontFamily: fontFamily,
    '@media (min-width:600px)': {
        fontSize: '1.15rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
    },
};
theme.typography.h4 = {
    fontSize: '1rem',
    fontFamily: fontFamily,
    '@media (min-width:600px)': {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};
theme.typography.h3 = {
    fontFamily: fontFamily,
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};
theme.typography.h2 = {
    fontFamily: fontFamily,
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },
};
theme.typography.h2 = {
    fontSize: '1.7rem',
    fontFamily: fontFamily,
    '@media (min-width:600px)': {
        fontSize: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};
theme.typography.h1 = {
    fontFamily: fontFamily,
    fontSize: '1.9rem',
    '@media (min-width:600px)': {
        fontSize: '2.1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.6rem',
    },
};
theme.typography.body1 = {
    fontFamily: fontFamily,
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
        fontSize: '1.05rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
};
theme.typography.body2 = {
    fontFamily: fontFamily,
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.1rem',
    },
};
theme.typography.button = {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
        fontSize: '1.05rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
};
theme.typography.subtitle1 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
    },
};
theme.typography.subtitle1 = {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
    },
};


console.log('theme.typography:', theme.typography)

export default theme
