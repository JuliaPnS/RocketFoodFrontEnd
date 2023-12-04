import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';


import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { HomeUser } from './pages/HomeUser';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <HomeUser />
    </ThemeProvider>
  </React.StrictMode>
)
