import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import CollectionItemPreview from '../collection/CollectionItemPreview';

const Collection = ({ collection: { collectionPage, title, items } }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={3}
      justify='center'
      style={{ padding: matchesMD ? '0 0' : '0 5em' }}
    >
      <Grid item align='center' xs={12}>
        <CardMedia
          style={{
            width: matchesSM ? '100vw' : '86vw',
            height: matchesSM ? '20vh' : matchesMD ? '40vh`' : '50vh'
          }}
          image={collectionPage.imageUrl}
        />
      </Grid>
      <Grid item align='center' xs={12} style={{ margin: '2em 0' }}>
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
      </Grid>
      <Grid item container spacing={3} direction='row' justify='center' xs={12}>
        {items.map(({ id, ...otherProps }) => (
          <Grid item key={id}>
            <CollectionItemPreview id={id} {...otherProps} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Collection;
