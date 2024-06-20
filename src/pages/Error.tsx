import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();

  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};
