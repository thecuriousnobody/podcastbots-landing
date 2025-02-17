import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { monoPalette } from '../../theme';
import { addToWaitlist } from '../../services/waitlist';

const BetaSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addToWaitlist(email);
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: '500px',
        mx: 'auto',
        mt: 4
      }}
    >
      {success ? (
        <Alert 
          severity="success"
          sx={{
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 200, 83, 0.1)',
            color: '#00813A',
            '& .MuiAlert-icon': {
              color: '#00813A'
            }
          }}
        >
          Thanks for joining! We'll keep you updated on our progress.
        </Alert>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <TextField
              fullWidth
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: monoPalette.paper,
                  '& fieldset': {
                    borderColor: monoPalette.border,
                  },
                  '&:hover fieldset': {
                    borderColor: monoPalette.text.secondary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: monoPalette.black,
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                minWidth: { xs: '100%', sm: '150px' },
                backgroundColor: monoPalette.black,
                color: monoPalette.paper,
                '&:hover': {
                  backgroundColor: monoPalette.text.primary,
                },
              }}
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </Box>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mt: 2, textAlign: 'center' }}
            >
              {error}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default BetaSignup;
