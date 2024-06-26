import React, { useState } from 'react';
import { Box, Button, Snackbar } from '@mui/joy';
import { ShareOutlined } from '@mui/icons-material';

export const ShareLottie = () => {
  const [openNotification, setOpenNotification] = useState(false);

  const shareLottie = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setOpenNotification(true);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button variant='solid' fullWidth onClick={shareLottie} startDecorator={<ShareOutlined />}>
        Share Lottie
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={openNotification}
        autoHideDuration={1500}
        onClose={() => setOpenNotification(false)}
        variant='solid'
        color='success'
        sx={{
          maxWidth: '100%',
          minWidth: 0,
        }}
      >
        Link Copied
      </Snackbar>
    </Box>
  );
};
