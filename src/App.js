import React from 'react';
import {
  CssBaseline,
  ThemeProvider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from './theme';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
}));

export default function App() {
  useStyles();
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}