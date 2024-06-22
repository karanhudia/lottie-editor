import React from 'react';
import { Box, Typography } from '@mui/joy';
import { FileUpload } from '../components/FileUpload';

export const Home = () => {
  return (
    <Box alignContent='center' alignItems='center' width='100%' sx={{ height: '100%' }}>
      <Typography color='neutral' level='h2'>
        Welcome to Home
      </Typography>
      <Box pt={2}>
        <FileUpload />
      </Box>
    </Box>
  );
};
