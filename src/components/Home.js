import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, CardMedia } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import CollectionCard from './collections/CollectionCard';

const useStyles = makeStyles(theme => ({
  homeContainer: { width: '100vw' },
  textContainer: {
    margin: '6em 0',
    width: '50vw',
    [theme.breakpoints.down('md')]: {
      width: '90vw'
    }
  },
  title: { marginBottom: '1em' },
  descriptiion: { lineHeight: '1.7em' },
  collectionsContainer: {
    width: '80vw',
    [theme.breakpoints.down('md')]: {
      width: '100vw'
    }
  },
  collectionContainer: {
    margin: '1em',
    [theme.breakpoints.down('sm')]: {
      margin: '1.5em 0'
    }
  },
  carouselContainer: { width: '100vw' },
  carouselContent: {
    width: '100vw',
    height: '85vh',
    [theme.breakpoints.down('md')]: {
      height: '35vh'
    },
    [theme.breakpoints.down('sm')]: {
      height: '60vh'
    }
  },
  carouselActions: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '2em'
  },
  button: {
    ...theme.button,
    fontSize: '1.1em',
    ...theme.buttonFillRedAnimation
  }
}));

const Banner = ({ collection, history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardMedia
      image={collection.collectionPage.imageUrl}
      title={collection.Name}
      className={classes.carouselContainer}
    >
      <Grid
        item
        container
        direction='column'
        alignItems='flex-end'
        justify={matchesSM ? 'flex-end' : 'center'}
        className={classes.carouselContent}
      >
        <div className={classes.carouselActions}>
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
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return collections.length ? (
    <Grid container justify='center' className={classes.homeContainer}>
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
      <Grid
        item
        container
        direction='column'
        jusify='center'
        className={classes.textContainer}
      >
        <Typography
          variant={matchesMD ? 'h3' : 'h2'}
          align='center'
          className={classes.title}
        >
          UNASHAMED TO BE DIFFERENT
        </Typography>
        <Typography
          variant='body2'
          align='center'
          className={classes.description}
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
        className={classes.collectionsContainer}
      >
        {collections.map((c, i) => (
          <Grid item key={i} className={classes.collectionContainer}>
            <CollectionCard collection={c} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  ) : null;
};

export default Home;
