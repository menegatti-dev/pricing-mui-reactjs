import React from 'react';
import { styled, } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button
} from '@material-ui/core';

export const Container = styled(AppBar)(({
  theme
}) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Bar = styled(Toolbar)(() => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}));

export const ToolbarTitle = styled(Typography)(() => ({
  flexGrow: 1,
}));

export const Navigation = styled('nav')(() => ({

}));

export const RedirectLink = styled(({ ...other }) => (
  <Link {...other} variant="button" color="textPrimary" />
))(({
  theme
}) => ({
  margin: theme.spacing(1, 1.5),
}));

export const ButtonOutlined = styled(({ ...other }) => (
  <Button {...other} color="primary" variant="outlined" />
))(() => ({
  
}));
