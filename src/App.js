import React from 'react';
import {
  CssBaseline,
  ThemeProvider
} from '@material-ui/core';

import theme from './theme';
import Header from './components/Header';

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}