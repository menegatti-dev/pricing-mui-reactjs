import React from 'react';
import { styled } from '@material-ui/core/styles';
import {
    Container,
    Grid
} from '@material-ui/core';

export const ContainerFooter = styled(({ ...other }) => (
    <Container {...other} maxWidth="md" component="footer" />
))(({theme}) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
}));

export const GridColumns = styled(({ ...other }) => (
    <Grid {...other} container spacing={4} justify="space-evenly" />
))(() => {});