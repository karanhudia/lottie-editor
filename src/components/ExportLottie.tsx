import React, { useContext } from 'react';
import { Box, Button } from '@mui/joy';
import { SharedProps } from '../context/SharedPropsContext';
import { Download, DownloadOutlined } from '@mui/icons-material';

export const ExportLottie = () => {
  const { lottieJSON } = useContext(SharedProps);

  const exportJSON = () => {
    const jsonData = new Blob([JSON.stringify(lottieJSON)], { type: 'application/json' });
    const jsonURL = URL.createObjectURL(jsonData);

    const link = document.createElement('a');
    link.href = jsonURL;
    link.download = `${lottieJSON?.nm ?? 'MyEditedLottie'}.json`;
    link.click();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button variant='soft' fullWidth onClick={exportJSON} startDecorator={<Download />}>
        Export JSON
      </Button>
    </Box>
  );
};
