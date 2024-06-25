import React from 'react';
import { Avatar, Box, Link, Typography } from '@mui/joy';
import LottieFilesLogo from '../assets/lottie.svg';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Box
      component='header'
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow:
          'var(--joy-shadowRing, 0 0 #000),0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))',
        padding: '10px 15px',
      }}
    >
      <Link component={RouterLink} to={'/'} underline='none'>
        <Avatar alt='Lottie Files Logo' src={LottieFilesLogo} />
        <Typography level='h4' color='neutral' pl={1}>
          Lottie Editor
        </Typography>
      </Link>
    </Box>
  );
};
