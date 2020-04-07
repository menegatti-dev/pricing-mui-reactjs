import React from 'react';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';

import { 
  Header,
  CardPricing
} from './styles';


export default function Plan({ tier }) {
  return (
    <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
      <Card>
        <Header
          title={tier.title}
          subheader={tier.subheader}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          action={tier.title === 'Pro' ? <StarIcon /> : null}
        />
        <CardContent>
          <CardPricing>
            <Typography component="h2" variant="h3" color="textPrimary">
              ${tier.price}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              /mo
            </Typography>
          </CardPricing>
          <ul>
            {tier.description.map((line) => (
              <Typography component="li" variant="subtitle1" align="center" key={line}>
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button fullWidth variant={tier.buttonVariant} color="primary">
            {tier.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
