import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider , createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
      primary: {
        main: '#009739',
      },
      secondary: {
        main: '#ff5722',
      },
      background: {
        default: '#F5F5F5',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
      },
    },
    typography: {
      fontFamily: 'Anta, sans-serif',
      // You can add more typography styles here if needed
    },
    overrides: {
      MuiTypography: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiListItem: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiButton: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiInput: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiSelect: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiAppBar: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiCard: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      MuiTable: {
        root: {
          fontFamily: 'Anta, sans-serif',
        },
      },
      // Add more overrides for other components if needed
    },
    // Add more configuration options as needed
  });
  

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  );
