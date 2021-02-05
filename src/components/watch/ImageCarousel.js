import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CardMedia, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const ImageCarousel = ({ imageUrl }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Carousel
      animation={'fade'}
      indicators={true}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={false}
    >
      {imageUrl.map((img, i) => (
        <Paper style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '1em' }}>
          <CardMedia
            style={{
              width: matchesSM ? '100vw' : '35vw',
              height: matchesSM ? '40vh' : matchesMD ? '60vh`' : '80vh',
              position: 'relative'
            }}
            image={img}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
