import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, CardMedia, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import CollectionCardContainer from '../../containers/CollectionCardContainer';

const Home = ({ collections, history }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
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
            onChange={i => setSliderIndex(i)}
            animation={'fade'}
            indicatorProps={true}
            navButtonsAlwaysInvisible={true}
            autoPlay={true}
            interval={5000}
            timeout={200}
          >
            {collections.map((c, i) => (
              <Paper key={i}>
                <CardMedia
                  style={{
                    width: matchesMD ? '100vw' : '80vw',
                    height: matchesMD ? '30vh' : '80vh',
                    position: 'relative'
                  }}
                  image={c.collectionPage.imageUrl}
                />
              </Paper>
            ))}
          </Carousel>
        </Grid>
        {collections.map((c, i) =>
          i === sliderIndex ? (
            <Grid key={i} item style={{ padding: 0 }}>
              <Typography
                variant={matchesMD ? 'h3' : 'h1'}
                style={{
                  background: '#ffffff82',
                  boxShadow: '5px 0 0 #ffffff82',
                  margin: '1em 0 0.3em 0',
                  position: matchesMD ? '' : 'absolute',
                  top: matchesMD ? '' : '10%',
                  right: matchesMD ? '' : '15%'
                }}
              >
                {c.title.toUpperCase()}
              </Typography>
              <Button
                variant='outlined'
                size='large'
                style={{
                  border: '3px solid',
                  zIndex: 3,
                  position: matchesMD ? '' : 'absolute',
                  top: matchesMD ? '' : '25%',
                  right: matchesMD ? '' : '5%'
                }}
                onClick={() =>
                  history.push(
                    `${history.location.pathname}collections/${c.routeName}`
                  )
                }
              >
                DISCOVER THE COLLECTION
              </Button>
            </Grid>
          ) : null
        )}
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
            margin: '1em 0 0.3em 0'
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
            style={{ margin: matchesMD ? '1em 0' : '1em 1em', padding: 0 }}
          >
            <CollectionCardContainer collection={c} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
