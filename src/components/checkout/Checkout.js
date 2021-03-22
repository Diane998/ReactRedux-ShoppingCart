import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  arrow: {
    cursor: 'pointer'
  }
}));

const Checkout = ({
  cartItems,
  total,
  clearItemFromCart,
  addItem,
  removeItem
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      direction='column'
      style={{
        width: matchesMD ? '90vw' : '80vw',
        margin: '0 auto'
      }}
    >
      <Grid item>
        <Typography
          align='left'
          variant='h1'
          style={{
            margin: '1.5em 0',
            fontSize: matchesMD ? '2em' : '2.5em'
          }}
        >
          SHOPPING CART
        </Typography>
      </Grid>
      {cartItems.length ? (
        <>
          <Grid item container direction='row' align='center'>
            {matchesSM ? (
              cartItems.map((item, i) => (
                <Grid
                  item
                  container
                  direction='column'
                  spacing={1}
                  key={i}
                  style={{ margin: '3em 0' }}
                >
                  <Grid item>
                    <img
                      src={item.itemPage.imageUrl}
                      alt={item.name}
                      style={{ width: 200 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant='h3'>{item.name}</Typography>
                    <Button
                      size='medium'
                      onClick={() => clearItemFromCart(item)}
                    >
                      REMOVE ITEM
                    </Button>
                  </Grid>
                  <Grid item container direction='row' justify='space-around'>
                    <Grid item>
                      <Typography variant='body2'>PRICE</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2'>${item.price}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row' justify='space-around'>
                    <Grid item>
                      <Typography variant='body2'>QUANTITY</Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction='row'
                        justify='center'
                        spacing={1}
                      >
                        <Grid item>
                          <div
                            className={classes.arrow}
                            onClick={() => removeItem(item)}
                          >
                            &#10094;
                          </div>
                        </Grid>
                        <Grid item>
                          <span>{item.quantity}</span>
                        </Grid>
                        <Grid item>
                          <div
                            className={classes.arrow}
                            onClick={() => addItem(item)}
                          >
                            &#10095;
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item container direction='row' justify='space-around'>
                    <Grid item>
                      <Typography variant='body2'>TOTAL</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2'>
                        ${item.price * item.quantity}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            ) : (
              <TableContainer>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align='center'>PRODUCT</TableCell>
                      <TableCell align='center'>PRICE</TableCell>
                      <TableCell align='center'>QUANTITY</TableCell>
                      <TableCell align='center'>TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell component='th' scope='row'>
                          <img
                            src={item.itemPage.imageUrl}
                            alt={item.name}
                            style={{ width: 200 }}
                          />
                        </TableCell>
                        <TableCell align='center'>
                          <Typography variant='body2'>{item.name}</Typography>
                          <Button
                            size='medium'
                            onClick={() => clearItemFromCart(item)}
                          >
                            REMOVE ITEM
                          </Button>
                        </TableCell>
                        <TableCell align='center'>${item.price}</TableCell>
                        <TableCell align='center'>
                          <Grid
                            container
                            direction='row'
                            justify='center'
                            spacing={1}
                          >
                            <Grid item>
                              <div
                                className={classes.arrow}
                                onClick={() => removeItem(item)}
                              >
                                &#10094;
                              </div>
                            </Grid>
                            <Grid item>
                              <span>{item.quantity}</span>
                            </Grid>
                            <Grid item>
                              <div
                                className={classes.arrow}
                                onClick={() => addItem(item)}
                              >
                                &#10095;
                              </div>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell align='center'>
                          <Typography variant='body2'>
                            ${item.price * item.quantity}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignItems={matchesSM ? 'center' : 'flex-end'}
            spacing={4}
            style={{ marginTop: '4em' }}
          >
            <Grid item>
              <Typography variant='h3'>SUBTOTAL: ${total}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                style={{ padding: '1em 6em', borderRadius: 0 }}
              >
                CHECKOUT
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid item>
          <Typography
            align='left'
            variant='h4'
            style={{
              margin: '1.5em 0'
            }}
          >
            Your cart is empty.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Checkout;
