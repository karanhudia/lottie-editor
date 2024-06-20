import React, { useContext } from 'react';
import { Box, Button, Sheet } from '@mui/joy';
import { socket } from '../socket';
import { SharedProps } from '../context/SharedPropsContext';

export const Header = () => {
  const { lottieJSON } = useContext(SharedProps);
  return (
    <Box
      component='header'
      sx={{
        height: '55px', // 55px is the height of the NavBar
        display: 'grid',
      }}
    >
      <Sheet variant='outlined'>
        <Button
          onClick={() => {
            console.log(socket);
            socket.emit('details', lottieJSON);
          }}
        >
          Connect
        </Button>
      </Sheet>
    </Box>
  );
};
