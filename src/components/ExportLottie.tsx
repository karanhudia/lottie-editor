import React, { useCallback } from 'react';
import { Box, Button } from '@mui/joy';
import { useSharedProps } from '../context/SharedPropsContext';
import { Download } from '@mui/icons-material';

export const ExportLottie = () => {
  const { lottieJSON } = useSharedProps();

  const exportJSON = useCallback(() => {
    const jsonData = new Blob([JSON.stringify(lottieJSON)], { type: 'application/json' });
    const jsonURL = URL.createObjectURL(jsonData);

    const link = document.createElement('a');
    link.href = jsonURL;
    link.download = `${lottieJSON?.nm ?? 'MyEditedLottie'}.json`;
    link.click();
    URL.revokeObjectURL(jsonURL); // Clean up the URL object after use
  }, [lottieJSON]);

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
