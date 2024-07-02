import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Box, Typography } from '@mui/joy';
import { InfoOutlined } from '@mui/icons-material';
import { ApolloError } from '@apollo/client';

type ErrorProps = {
  apolloError?: ApolloError;
};

export const Error = ({ apolloError }: ErrorProps) => {
  const error = useRouteError();

  let errorMessage: string;
  if (apolloError) {
    errorMessage = apolloError.message;
  } else if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  console.error(error);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'danger.100',
        gap: 2,
        height: '100%',

        px: 2,
      }}
    >
      <Typography
        level='h1'
        color='danger'
        startDecorator={<InfoOutlined />}
        sx={{ alignItems: 'flex-start', wordBreak: 'break-all' }}
      >
        {errorMessage}
      </Typography>
      <Typography
        variant='solid'
        color='danger'
        startDecorator='🚨'
        fontSize='lg'
        sx={{ '--Typography-gap': '0.5rem', p: 1, borderRadius: 5 }}
      >
        Sorry, an unexpected error has occurred
      </Typography>
    </Box>
  );
};
