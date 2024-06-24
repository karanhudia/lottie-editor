import React, { useCallback } from 'react';
import { Box, Button, styled, SvgIcon, Typography } from '@mui/joy';
import { LottieAnimation } from '../graphql/lottie-server/generated';
import { UploadFileOutlined } from '@mui/icons-material';
import { useLottieAnimation } from '../hooks/useLottieAnimation';

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
      // TODO: Add type guard
      const obj = JSON.parse(event.target?.result as string) as LottieAnimation;

      void importLottie(obj);
    },
    [importLottie],
  );

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const reader = new FileReader();
      reader.onload = onReaderLoad;
      if (event.target.files?.[0]) {
        reader.readAsText(event.target.files[0]);
      }
    },
    [onReaderLoad],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--joy-palette-neutral-100, #F0F4F8)',

        height: '100%',
      }}
    >
      <UploadFileOutlined
        fontSize='large'
        sx={{
          height: 'auto',
          width: '200px',
          fill: '#97C3F0',
        }}
      />
      <Typography
        level='h4'
        sx={{
          color: 'primary.600',
        }}
      >
        Edit Animation
      </Typography>
      <Box pt={2}>
        <Button
          component='label'
          role={undefined}
          tabIndex={-1}
          variant='outlined'
          color='primary'
          startDecorator={
            <SvgIcon>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
                />
              </svg>
            </SvgIcon>
          }
        >
          Upload JSON
          <VisuallyHiddenInput type='file' accept='.json' onChange={onChange} />
        </Button>
      </Box>
    </Box>
  );
};
