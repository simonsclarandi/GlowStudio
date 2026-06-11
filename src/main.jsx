import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { siteConfig } from './config/siteConfig';

const theme = createTheme({
  palette: {
    primary: {
      main: siteConfig.brand.colors.primary,
    },
    secondary: {
      main: siteConfig.brand.colors.secondary,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);