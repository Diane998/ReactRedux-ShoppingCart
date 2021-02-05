import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ImageCarousel from './ImageCarousel';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '1em 0',
    padding: '0.4em 1.5em',
    borderRadius: 0,
    fontSize: '1.1em'
  }
}));

const WatchView = ({ watch }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  console.log('component', watch);

  const {
    collection,
    id,
    name,
    price,
    itemPage: { description, imageUrl, specs }
  } = watch;
  return (
    <Grid container justify='center'>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify='space-around'
        style={{ width: '80vw' }}
      >
        <Grid item>
          <ImageCarousel imageUrl={imageUrl} />
        </Grid>
        <Grid
          item
          style={{
            width: matchesSM ? '80vw' : '35vw',
            height: matchesSM ? '40vh' : matchesMD ? '60vh`' : '80vh',
            marginTop: '3em'
          }}
        >
          <Typography variant='h1' component='h1'>
            {name}
          </Typography>
          <Typography variant='h4' component='h4' style={{ color: 'grey' }}>
            {collection}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            style={{ color: 'black', margin: '2em 0' }}
          >
            {description}
          </Typography>
          <Typography variant='h3' component='h3'>
            ${price}
          </Typography>
          <Button
            variant='outlined'
            size='large'
            className={classes.button}
            startIcon={<ShoppingCartOutlinedIcon />}
          >
            ADD TO CART
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WatchView;
