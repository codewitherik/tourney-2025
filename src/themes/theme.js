import { createTheme, fontFamily } from "@mui/system";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ac145a'
        },
    },
    typography: {
        fontFamily: "Roboto", "Poppins", "Inter", sans-serif,
    };
});

export default theme;

