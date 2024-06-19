import React from 'react';
import './App.css';
import '@fontsource/inter';
import {CssVarsProvider, Sheet} from "@mui/joy";

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <Sheet variant="outlined">Welcome!</Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default App;
