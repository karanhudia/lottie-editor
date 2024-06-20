import React, { useEffect, useState } from 'react';
import './App.css';
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy';
import { SharedPropsContext } from './context/SharedPropsContext';
import { socket } from './socket';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Editor, loader as lottieLoader } from './pages/Editor';
import { Error } from './pages/Error';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: 'edit/:editId',
      element: <Editor />,
      errorElement: <Error />,
      loader: lottieLoader,
    },
  ]);

  console.info({ isConnected });

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
