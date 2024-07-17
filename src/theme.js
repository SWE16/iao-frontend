import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0D47A1',
        },
        background: {
            default: '#0A0B1A',
            paper: '#131325',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#A0A0A0',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;
