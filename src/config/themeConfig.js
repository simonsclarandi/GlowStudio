// src/config/themeConfig.js
import { createTheme } from '@mui/material/styles';
import { siteConfig } from './siteConfig';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: siteConfig.brand.colors.primary,
      dark: siteConfig.brand.colors.primaryHover,
    },
    secondary: {
      main: siteConfig.brand.colors.secondary,
    },
    background: {
      default: siteConfig.brand.colors.background,
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none', // Quita las mayúsculas forzadas en los botones
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 8,
  },
});