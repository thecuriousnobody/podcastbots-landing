import React from 'react';
import { Box, Typography, Input, Button } from '../../utils/mui';
import { monoPalette } from '../../theme';
import { addToWaitlist } from '../../services/waitlist';

const WaitlistForm = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await addToWaitlist(email);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '1.5rem',
        backgroundColor: monoPalette.paper,
        borderRadius: '16px',
        border: `1px solid ${monoPalette.border}`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: monoPalette.text.primary,
          mb: 3,
          fontWeight: 600,
          textAlign: 'center',
          fontSize: { xs: '1.125rem', sm: '1.25rem' }
        }}
      >
        Join the Waitlist
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Input
          fullWidth
          type="email"
          placeholder="Enter email to get early access"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          error={submitStatus === 'error'}
          disableUnderline
          sx={{
            mb: 2,
            p: '14px 16px',
            fontSize: '16px',
            borderRadius: '12px',
            border: `1px solid ${submitStatus === 'error' ? '#d32f2f' : monoPalette.border}`,
            backgroundColor: monoPalette.hover,
            '&:hover': {
              borderColor: monoPalette.text.secondary,
            },
            '&.Mui-focused': {
              borderColor: monoPalette.black,
            },
          }}
        />
        {submitStatus === 'error' && (
          <Typography
            variant="caption"
            sx={{
              color: 'error.main',
              position: 'absolute',
              bottom: '8px',
              left: '14px'
            }}
          >
            Unable to join waitlist. Please try again.
          </Typography>
        )}
      </Box>
      <Button
        fullWidth
        variant="contained"
        type="submit"
        disabled={isSubmitting || !email.trim()}
        sx={{
          backgroundColor: monoPalette.black,
          color: monoPalette.paper,
          py: { xs: 1.25, sm: 1.5 },
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            backgroundColor: monoPalette.text.primary,
          },
        }}
      >
        {isSubmitting ? 'Adding to Waitlist...' : 'Join Waitlist'}
      </Button>
      {submitStatus === 'success' && (
        <Typography
          variant="body2"
          sx={{
            color: 'success.main',
            textAlign: 'center',
            mt: 2
          }}
        >
          Thanks for joining! We'll notify you as soon as we launch our beta.
        </Typography>
      )}
    </form>
  );
};

export default WaitlistForm;
