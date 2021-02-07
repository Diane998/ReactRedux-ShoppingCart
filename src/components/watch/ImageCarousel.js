import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CardMedia, Paper, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const Indicators = ({ images, activeIndex, onSetActiveIndex }) => {
  return (
    <Grid
      container
      justify='flex-end'
      style={{ position: 'absolute', bottom: '0.5%', right: '0.5%' }}
    >
      {images.map((img, i) => (
        <Paper
          key={i}
          onClick={() => onSetActiveIndex(i)}
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
};

const ImageCarousel = ({ imageUrl }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Carousel
      animation={'fade'}
      indicators={false}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={false}
      autoPlay={false}
      timeout={0}
    >
      {imageUrl.map((img, i) => {
        return (
          <Paper
            key={i}
            style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '1em' }}
          >
            <CardMedia
              style={{
                width: matchesSM ? '100vw' : '35vw',
                height: matchesSM ? '40vh' : matchesMD ? '60vh`' : '80vh',
                position: 'relative'
              }}
              image={img}
            />
            <Indicators images={imageUrl} activeIndex={i} />
          </Paper>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
