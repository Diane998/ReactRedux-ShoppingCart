import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: 80,
    marginBottom: 20
  },
  image: {
    width: '30%'
  },
  itemDetails: {
    width: '65%',
    marginLeft: '5%'
  },
  name: {
    fontSize: 16
  }
}));

const CartItem = ({
  item: {
    itemPage: { imageUrl },
    price,
    name,
    quantity
  }
}) => {
  const classes = useStyles();

  return (
    <Grid item container direction='row' className={classes.container}>
      <Grid item className={classes.image}>
        <img style={{ width: '100%' }} src={imageUrl} alt={name} />
      </Grid>
      <Grid
        item
        container
        direction='column'
        justify='center'
        className={classes.itemDetails}
      >
        <Grid item>
          <Typography variant='body2'>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2'>
            {quantity} x ${price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(CartItem);
