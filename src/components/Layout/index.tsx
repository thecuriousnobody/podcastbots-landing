import React from 'react';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Container maxWidth="lg" sx={{ flex: 1, py: { xs: 4, md: 8 } }}>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
