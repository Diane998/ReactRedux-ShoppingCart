import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, CardMedia, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const Home = ({ collections }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const [sliderIndex, setSliderIndex] = useState(0);

  console.log(collections);
  console.log(sliderIndex);
  return (
    <Grid container>
      <Grid
        item
        container
        spacing={4}
        direction={matchesMD ? 'column' : 'row'}
        style={{
          width: matchesMD ? '100vw' : '80vw',
          marginBottom: '6em'
        }}
      >
        <Grid item style={{ padding: 0 }}>
          <Carousel
            onChange={i => setSliderIndex(i)}
            animation={'fade'}
            indicatorProps={true}
            navButtonsAlwaysVisible={false}
            autoPlay={true}
            timeout={500}
          >
            {collections.map((c, i) => (
              <Paper key={i}>
                <CardMedia
                  style={{
                    width: '80vw',
                    height: '85vh',
                    position: 'relative'
                  }}
                  image={c.collectionPage.imageUrl}
                />
                {/* <Typography
                  variant='h1'
                  component='h1'
                  style={{
                    color: 'black',
                    position: 'absolute',
                    background: '#ffffff82',
                    boxShadow: '5px 0 0 #ffffff82',
                    bottom: '80%',
                    right: '5%'
                  }}
                >
                  {c.title.toUpperCase()}
                </Typography> */}
              </Paper>
            ))}
          </Carousel>
        </Grid>
        {collections.map((c, i) =>
          i === sliderIndex ? (
            <Grid item key={i}>
              <Typography
                variant='h1'
                component='h1'
                style={{
                  color: 'black',
                  background: '#ffffff82',
                  boxShadow: '5px 0 0 #ffffff82',
                  margin: '1em 0 0.3em 0',
                  position: 'absolute',
                  top: '10%',
                  right: '15%'
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
                  position: 'absolute',
                  top: '25%',
                  right: '5%'
                }}
              >
                DISCOVER THE COLLECTION
              </Button>
            </Grid>
          ) : null
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
