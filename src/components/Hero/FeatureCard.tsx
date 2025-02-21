import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { monoPalette } from '../../theme';

interface FeatureCardProps {
  title: string;
  description: string;
  style: {
    backgroundColor?: string;
    color?: string;
    gridColumn?: any;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, style }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, sm: 3 },
        borderRadius: '16px',
        border: `1px solid ${monoPalette.border}`,
        minHeight: { xs: '180px', sm: '200px' },
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: 'translateY(0)',
        ...style,
        '&:hover': {
          boxShadow: `0 20px 40px ${monoPalette.shadow}`,
          transform: 'translateY(-5px)'
        }
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: style.color || monoPalette.text.primary,
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: '1.125rem', sm: '1.25rem' }
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <Typography
            variant="body1"
            sx={{ 
              color: style.color || monoPalette.text.body,
              fontSize: { xs: '0.9375rem', sm: '1rem' }
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default FeatureCard;
