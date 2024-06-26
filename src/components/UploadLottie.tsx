import React, { useCallback, useMemo } from 'react';
import { Box, Button, styled, Typography } from '@mui/joy';
import { UploadFile, UploadFileOutlined } from '@mui/icons-material';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { isLottieAnimation } from '../utils/typeGuard';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export const UploadLottie = () => {
  const { importLottie } = useLottieAnimation();

  const onReaderLoad = useCallback(
    (event: ProgressEvent<FileReader>): void => {
      const parsedJSON = JSON.parse(event.target?.result as string);

      if (!isLottieAnimation(parsedJSON)) {
        return;
      }

      importLottie(parsedJSON);
    },
    [importLottie],
  );

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      const reader = new FileReader();
      reader.onload = onReaderLoad;
      if (target.files?.[0]) {
        reader.readAsText(target.files[0]);
      }
    },
    [onReaderLoad],
  );

  const styles = useMemo(
    () => ({
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--joy-palette-neutral-100, #F0F4F8)',
        height: '100%',
      },
      icon: {
        height: 'auto',
        width: '200px',
        fill: '#97C3F0',
      },
      typography: {
        color: 'primary.600',
      },
    }),
    [],
  );

  return (
    <Box sx={styles.container}>
      <UploadFileOutlined fontSize='large' sx={styles.icon} />
      <Typography level='h4' sx={styles.typography}>
        Edit Animation
      </Typography>
      <Box py={2}>
        <Button
          component='label'
          tabIndex={-1}
          variant='outlined'
          color='primary'
          startDecorator={<UploadFile />}
        >
          Upload JSON
          <VisuallyHiddenInput type='file' accept='.json' onChange={onChange} />
        </Button>
      </Box>
    </Box>
  );
};
