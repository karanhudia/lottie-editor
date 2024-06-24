import React from 'react';
import { Avatar, Box } from '@mui/joy';
import LottieFilesLogo from '../assets/lottie.svg';

export const Header = () => {
  return (
    <Box
      component='header'
      sx={{
        display: 'grid',
        alignItems: 'center',
        boxShadow:
          'var(--joy-shadowRing, 0 0 #000),0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))',
        padding: '10px 15px',
      }}
    >
      <Avatar alt='Lottie Files Logo' src={LottieFilesLogo} />
    </Box>
  );
};
