import React from 'react';
import { Box, Typography } from '@mui/joy';
import { FileUpload } from '../components/FileUpload';

export const Home = () => {
  return (
    <Box alignContent='center' alignItems='center'>
      <Typography>Welcome to Home</Typography>
      <FileUpload />
    </Box>
  );
};
