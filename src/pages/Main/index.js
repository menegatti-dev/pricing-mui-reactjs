import React from 'react';

import {
  Container,
  Grid
} from '@material-ui/core';

import Plan from '../../components/Plan';
import Title from '../../components/Title';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const header = {
  title: 'Pricing',
  description: `Quickly build an effective pricing table for your potential customers with this layout.
        It's built with default Material-UI components with little customization.`
}

export default function Main() {
  return (
    <>
      <Title title={header.title} description={header.description} />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Plan tier={tier} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
