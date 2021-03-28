import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const useStyles = makeStyles(theme => ({
  container: {
    width: 45,
    height: 45,
    position: 'relative',
    cursor: 'pointer'
  },
  cartIcon: {
    width: 24,
    height: 24
  },
  itemCount: {
    position: 'absolute',
    fontSize: 10,
    fontWeight: 'bold',
    bottom: 15,
    left: 20,
    color: 'black'
  }
}));

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      alignItems='center'
      justify='center'
      onClick={toggleCartHidden}
    >
      <Grid item>
        <ShoppingIcon className={classes.cartIcon} />
      </Grid>
      <Grid item>
        <Typography className={classes.itemCount}>{itemCount}</Typography>
      </Grid>
    </Grid>
  );
};
export default CartIcon;
