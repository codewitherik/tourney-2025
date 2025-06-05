import React from 'react';
import ReactDom from 'react-dom/client';
import App './App.jsx';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './themes/theme';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
    </React.StrictMode>
);

