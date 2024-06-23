import React from 'react';
import './App.css';
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy';
import { SharedPropsContext } from './context/SharedPropsContext';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EditorPage } from './pages/EditorPage';
import { Error } from './pages/Error';

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
        <SharedPropsContext>
          <RouterProvider router={router} />
        </SharedPropsContext>
      </CssVarsProvider>
    </div>
  );
}

export default App;
