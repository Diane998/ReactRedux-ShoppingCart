import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, CardMedia, Paper } from '@material-ui/core';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import ImageCarousel from './ImageCarousel';

const useStyles = makeStyles(theme => ({
  button: {
    ...theme.button,
    margin: '1em 0',
    fontSize: '1.1em',
    '&:hover': {
      backgroundColor: theme.palette.common.crimson,
      color: 'white',
      border: 'none'
    }
  }
}));

const WatchView = ({ item, addItem }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  if (item) {
    const {
      collectionName,
      name,
      price,
      itemPage: { description, imageUrl, specs }
    } = item[0];

    return (
      <Grid container justify='center'>
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          justify='space-around'
          style={{
            width: matchesMD ? '100vw' : '80vw',
            marginBottom: '6em'
          }}
        >
          <Grid item>
            <ImageCarousel imageUrl={imageUrl} />
          </Grid>
          <Grid
            item
            style={{
              width: matchesSM ? '90vw' : '35vw',
              margin: matchesMD ? '0 1em' : 0
            }}
          >
            <Typography variant='h2'>{name}</Typography>
            <Typography variant='h4' style={{ color: 'grey' }}>
              {collectionName}
            </Typography>
            <Typography variant='body2' style={{ margin: '2em 0' }}>
              {description}
            </Typography>
            <Typography variant='h3' component='h3'>
              ${price}
            </Typography>
            <Button
              disableRipple
              variant='outlined'
              size='large'
              className={classes.button}
              startIcon={<Icon style={{ height: 24, width: 24 }} />}
              onClick={() => addItem(item[0])}
            >
              ADD TO CART
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            width: matchesSM ? '100%' : matchesMD ? '65vw' : '80vw'
          }}
        >
          <Grid item container justify='center'>
            <Typography variant='h2' component='h1' style={{ margin: '1em 0' }}>
              SPECS
            </Typography>
          </Grid>
          {specs.map(({ description, imageUrl }, i) => (
            <Grid
              key={i}
              item
              container
              direction='column'
              md
              alignItems='center'
              style={{
                width: matchesMD ? '100vw' : '40em',
                margin: matchesMD ? '2em 0' : 0
              }}
            >
              <Grid item style={{ width: matchesMD ? '100%' : '' }}>
                <Paper
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    padding: '0 1em',
                    borderRadius: 0
                  }}
                >
                  <CardMedia
                    style={{
                      width: matchesSM ? '90vw' : matchesMD ? '60vw' : '300px',
                      height: matchesSM ? '35vh' : matchesMD ? '40vh' : '230px'
                    }}
                    image={imageUrl}
                  />
                </Paper>
              </Grid>
              <Grid item style={{ width: '300px' }}>
                {description.map((d, i) => (
                  <li key={i} style={{ margin: '0.8em 0' }}>
                    {d}
                  </li>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  } else return null;
};

export default WatchView;
