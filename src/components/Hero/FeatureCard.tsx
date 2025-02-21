import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { monoPalette } from '../../theme';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

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
    <MotionPaper
      elevation={0}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
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
        ...style,
        '&:hover': {
          boxShadow: `0 20px 40px ${monoPalette.shadow}`
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
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
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
        </MotionBox>
      </Box>
    </MotionPaper>
  );
};

export default FeatureCard;
