import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import CartItem from './CartItem';

const useStyles = makeStyles(theme => ({
  container: {
    width: '300px',
    display: 'flex',
    padding: '20px',
    border: '1px solid black',
    backgroundColor: 'white',
    zIndex: 5
  },
  cartItems: {
    display: 'flex',
    overflowY: 'auto'
  },
  button: {
    ...theme.button,
    fontSize: '1em',
    ...theme.buttonFillRedAnimation
  }
}));

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      className={classes.container}
      direction='column'
      alignItems='center'
    >
      <Grid
        item
        container
        className={classes.cartItems}
        direction='row'
        style={{ height: cartItems.length ? '280px' : '30px' }}
      >
        {cartItems.length ? (
          cartItems.map((cartItem, i) => (
            <Grid item key={i}>
              <CartItem item={cartItem} />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography align={matchesMD ? 'left' : 'center'} variant='body2'>
              YOUR CART IS EMPTY
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid item>
        {cartItems.length ? (
          <Button
            disableRipple
            variant='outlined'
            size='large'
            className={classes.button}
            onClick={() => {
              history.push('/cart');
              toggleCartHidden();
            }}
          >
            GO TO CART
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default CartDropdown;
