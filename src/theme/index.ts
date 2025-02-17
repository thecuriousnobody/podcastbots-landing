import { createTheme, Theme } from '@mui/material/styles';

// Monochrome Color Palette
export interface MonoPalette {
  background: string;
  paper: string;
  text: {
    primary: string;
    body: string;
    secondary: string;
  };
  black: string;
  hover: string;
  border: string;
  shadow: string;
}

export const monoPalette: MonoPalette = {
  background: '#F8F9FA', // Soft, warm gray-white for main background
  paper: '#FFFFFF',      // Pure white for cards and elevated surfaces
  text: {
    primary: '#1A1A1A',   // Soft black for headings
    body: '#2D2D2D',      // Dark gray for body text
    secondary: '#4A4A4A'  // Medium gray for secondary text
  },
  black: '#000000',     // Pure black for buttons and strong elements
  hover: '#F2F2F2',     // Light gray for hover states
  border: '#E5E5E5',    // Light gray for borders
  shadow: 'rgba(0, 0, 0, 0.08)' // Subtle shadow
};

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: monoPalette.black,
      light: monoPalette.text.secondary,
      dark: monoPalette.text.primary,
    },
    secondary: {
      main: monoPalette.text.primary,
    },
    background: {
      default: monoPalette.background,
      paper: monoPalette.paper,
    },
    text: {
      primary: monoPalette.text.primary,
      secondary: monoPalette.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", system-ui, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontWeight: 700,
      fontSize: '4rem',
      letterSpacing: '-0.04em',
      color: monoPalette.text.primary,
    },
    h2: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.03em',
      color: monoPalette.text.primary,
    },
    h3: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
      color: monoPalette.text.primary,
    },
    body1: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
      color: monoPalette.text.body,
    },
    body2: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
      color: monoPalette.text.body,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: `${monoPalette.border} transparent`,
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
            borderRadius: '3px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: monoPalette.border,
            borderRadius: '3px',
            '&:hover': {
              backgroundColor: monoPalette.text.secondary
            }
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          boxShadow: `0 4px 15px ${monoPalette.shadow}`,
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: `0 6px 20px ${monoPalette.shadow}`,
            backgroundColor: monoPalette.black,
            color: monoPalette.paper,
          },
        },
        contained: {
          backgroundColor: monoPalette.black,
          color: monoPalette.paper,
          '&:hover': {
            backgroundColor: monoPalette.text.primary,
          },
        },
        outlined: {
          borderColor: monoPalette.border,
          '&:hover': {
            backgroundColor: monoPalette.hover,
            borderColor: monoPalette.text.primary,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: monoPalette.paper,
          boxShadow: `0 10px 30px ${monoPalette.shadow}`,
          border: `1px solid ${monoPalette.border}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 15px 40px ${monoPalette.shadow}`,
            borderColor: monoPalette.text.secondary,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: monoPalette.paper,
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: `0 4px 15px ${monoPalette.shadow}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: monoPalette.paper,
          backgroundImage: 'none',
          borderBottom: `1px solid ${monoPalette.border}`,
          boxShadow: `0 4px 15px ${monoPalette.shadow}`,
        },
      },
    },
  },
});

const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: 'light',
  },
});

const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#F4F4F4',
      secondary: '#B0B0B0',
    },
  },
});

const theme = lightTheme;
export default theme;

export { 
  theme, 
  lightTheme, 
  darkTheme
};
