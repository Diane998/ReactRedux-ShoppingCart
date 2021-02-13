import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import CollectionItemPreview from '../collection/CollectionItemPreview';

const Collection = ({ collection: { collectionPage, title, items } }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      spacing={3}
      style={{
        width: matchesMD ? '100vw' : '80vw',
        margin: '0 auto'
      }}
    >
      <Grid item align='center' xs={12} style={{ padding: 0 }}>
        <CardMedia
          style={{
            height: matchesSM ? '20vh' : matchesMD ? '30vh' : '50vh'
          }}
          image={collectionPage.imageUrl}
        />
      </Grid>
      <Grid item style={{ margin: '2em 0' }}>
        <Typography align='center' style={{ fontSize: '3em', color: 'black' }}>
          {title.toUpperCase()}
        </Typography>
        <Typography
          align='center'
          variant='body2'
          style={{ margin: matchesMD ? '1.5em 1em' : '2em 25%' }}
        >
          {collectionPage.description}
        </Typography>
        <Typography
          align='center'
          style={{ fontSize: '3em', color: 'black', margin: '4em 0 0.5em 0' }}
        >
          MEET THE {title.toUpperCase()}
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        spacing={3}
        style={{ margin: '0 auto', padding: 0 }}
      >
        {items.map(({ id, ...otherProps }) => (
          <Grid item key={id} style={{ margin: '0.5em 0' }}>
            <CollectionItemPreview id={id} {...otherProps} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Collection;
