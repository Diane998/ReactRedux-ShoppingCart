import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CardMedia, Paper, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const Indicators = ({ images, activeIndex }) => (
  <Grid
    container
    justify='flex-end'
    style={{
      position: 'absolute',
      bottom: '0.5%',
      right: '0.5%'
    }}
  >
    {images.map((img, i) => (
      <Paper
        key={i}
        style={{
          backgroundColor: 'white',
          padding: '1em',
          borderRadius: 0,
          borderBottom: i === activeIndex ? '2px solid red' : ''
        }}
      >
        <CardMedia
          key={i}
          image={img}
          style={{
            width: '35px',
            height: '35px',
            position: 'relative'
          }}
        />
      </Paper>
    ))}
  </Grid>
);

const ImageCarousel = ({ imageUrl }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={matchesMD ? true : false}
      autoPlay={false}
      timeout={500}
    >
      {imageUrl.map((img, i) => (
        <Paper
          key={i}
          style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '1em' }}
        >
          <CardMedia
            style={{
              width: matchesSM ? '90vw' : '500px',
              height: matchesSM ? '60vh' : '600px',
              position: 'relative'
            }}
            image={img}
          />
          <Indicators images={imageUrl} activeIndex={i} />
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
