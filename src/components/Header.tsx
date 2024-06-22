import React from 'react';
import { Box, Typography } from '@mui/joy';

export const Header = () => {
  return (
    <Box
      component='header'
      sx={{
        height: '55px', // 55px is the height of the NavBar
        display: 'grid',
        backgroundColor: 'var(--joy-palette-background-level1)',
        borderBottom: '1px solid var(--joy-palette-neutral-400)',
        alignItems: 'center',
      }}
    >
      <Typography color='neutral' level='h3'>
        Lottie Editor
      </Typography>
    </Box>
  );
};
