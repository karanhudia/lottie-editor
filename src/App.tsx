import React from 'react';
import './App.css';
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy';
import { ApolloProvider } from '@apollo/client';
import { SharedPropsContext } from './context/SharedPropsContext';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Editor } from './pages/Editor';
import { Error } from './pages/Error';
import { client } from './graphql/client';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: 'edit/:editId',
      element: <Editor />,
      errorElement: <Error />,
    },
  ]);

  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <CssVarsProvider>
          <SharedPropsContext>
            <RouterProvider router={router} />
          </SharedPropsContext>
        </CssVarsProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
