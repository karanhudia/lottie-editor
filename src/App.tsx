import React from 'react';
import './App.css';
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy';
import { SharedPropsContext } from './context/SharedPropsContext';
import { NetworkStateContext } from './context/NetworkStateContext';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EditorPage } from './pages/EditorPage';
import { Error } from './pages/Error';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <Error />,
    },
    {
      path: 'edit/:editId',
      element: <EditorPage />,
      errorElement: <Error />,
    },
  ]);

  return (
    <div className='App'>
      <CssVarsProvider>
        <NetworkStateContext>
          <SharedPropsContext>
            <ApolloProvider client={client}>
              <RouterProvider router={router} />
            </ApolloProvider>
          </SharedPropsContext>
        </NetworkStateContext>
      </CssVarsProvider>
    </div>
  );
}

export default App;
