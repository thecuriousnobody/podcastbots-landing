import { createTheme } from '@mui/material/styles';

export const monoPalette = {
  paper: '#FFFFFF',
  black: '#000000',
  hover: '#F5F5F5',
  border: 'rgba(0, 0, 0, 0.12)',
  shadow: 'rgba(0, 0, 0, 0.08)',
  text: {
    primary: '#000000',
    secondary: '#666666',
    body: '#333333'
  }
};

const theme = createTheme({
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Space Grotesk", sans-serif',
    },
    body2: {
      fontFamily: '"Space Grotesk", sans-serif',
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: monoPalette.black,
    },
    background: {
      default: monoPalette.paper,
      paper: monoPalette.paper,
    },
    text: {
      primary: monoPalette.text.primary,
      secondary: monoPalette.text.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
});

export default theme;
