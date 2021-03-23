import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, CardMedia } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import CollectionCardContainer from '../containers/CollectionCardContainer';

const useStyles = makeStyles(theme => ({
  button: {
    ...theme.button,
    fontSize: '1.1em',
    '&:hover': {
      backgroundColor: theme.palette.common.crimson
    }
  }
}));

const Banner = ({ collection, history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardMedia
      style={{
        width: '100vw'
      }}
      image={collection.collectionPage.imageUrl}
      title={collection.Name}
    >
      <Grid
        item
        container
        direction='column'
        alignItems='flex-end'
        justify={matchesSM ? 'flex-end' : 'center'}
        style={{ width: '100vw', height: matchesSM ? '50vh' : '85vh' }}
      >
        <div
          style={{
            padding: matchesSM ? '1em' : '2em',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
        >
          <Grid item>
            <Typography
              variant={matchesMD ? 'h3' : 'h1'}
              style={{ color: 'white' }}
            >
              {collection.title.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant='outlined'
              color='primary'
              onClick={() =>
                history.push(
                  `${history.location.pathname}collections/${collection.routeName}`
                )
              }
            >
              DISCOVER THE COLLECTION
            </Button>
          </Grid>
        </div>
      </Grid>
    </CardMedia>
  );
};

const Home = ({ collections, history }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return collections ? (
    <Grid container justify='center' style={{ width: '100vw' }}>
      <Grid
        item
        container
        align={matchesMD ? 'center' : ''}
        spacing={4}
        direction={matchesMD ? 'column' : 'row'}
        style={{ margin: '0 0 6em 0' }}
      >
        <Grid item style={{ padding: 0 }}>
          <Carousel
            autoPlay={true}
            animation={'fade'}
            indicators={true}
            timeout={1000}
            interval={5000}
            navButtonsAlwaysVisible={false}
          >
            {collections.map((c, i) => (
              <Banner collection={c} key={i} history={history} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          margin: '1em 0 5em 0',
          width: matchesMD ? '90vw' : '50vw'
        }}
      >
        <Typography
          variant={matchesMD ? 'h3' : 'h2'}
          style={{
            color: 'black',
            background: '#ffffff82',
            boxShadow: '5px 0 0 #ffffff82',
            margin: matchesMD ? '1em 0 0.3em 0' : '0 auto'
          }}
        >
          UNASHAMED TO BE DIFFERENT
        </Typography>
        <Typography
          align={matchesMD ? 'left' : 'center'}
          variant='body2'
          style={{
            lineHeight: '1.7em'
          }}
        >
          Unashamed to be different and taking strength from size, we’ve carved
          a new timeline in the watch market since our arrival in 2005. Coming
          on strong from the outset we sidestepped the traditional path and
          continue to break new ground in untested territory today.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        style={{ width: matchesMD ? '100vw' : '80vw' }}
      >
        {collections.map((c, i) => (
          <Grid
            item
            key={i}
            style={{ margin: matchesSM ? '1em 0.5em' : '1em 1em' }}
          >
            <CollectionCardContainer collection={c} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  ) : null;
};

export default Home;
