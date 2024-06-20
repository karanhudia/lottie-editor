import React from 'react';
import { Button, styled, SvgIcon } from '@mui/joy';
import { useSocket } from '../hooks/useSocket';
import { LottieAnimation } from '../types/LottieAnimation';

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

export const FileUpload = () => {
  const { createJSON } = useSocket();

  const onReaderLoad = (event: ProgressEvent<FileReader>): void => {
    // TODO: Add type guard
    const obj = JSON.parse(event.target?.result as string) as LottieAnimation;
    createJSON(obj);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    if (event.target.files?.[0]) {
      reader.readAsText(event.target.files[0]);
    }
  };

  return (
    <Button
      component='label'
      role={undefined}
      tabIndex={-1}
      variant='outlined'
      color='neutral'
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
      Upload a file
      <VisuallyHiddenInput type='file' accept='.json' onChange={onChange} />
    </Button>
  );
};
