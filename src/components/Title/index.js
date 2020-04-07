import React from 'react';

import {
  Typography
} from '@material-ui/core';

import { TitleContainer } from './styles';


export default function Title({ title, description }) {
  return (
    <TitleContainer maxWidth="sm" component="main">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        {description}
      </Typography>
    </TitleContainer>
  );
}
