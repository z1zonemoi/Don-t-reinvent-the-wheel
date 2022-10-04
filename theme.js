import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components'; //theme styled-components에서 불러오기

const darkTheme = {
  backgroundColor : "#17222f",
  color: "white"
};

const lightTheme = {
  backgroundColor : "white",
  color: "black"
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);