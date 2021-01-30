import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import CollectionCardContainer from '../../containers/CollectionCardContainer';

const Collection = ({ collections }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      spacing={3}
      justify='center'
      style={{ padding: matchesMD ? '0 2em' : '0 5em' }}
    >
      <Grid item xs={12} style={{ margin: '2.5em 0' }}>
        <Typography align='center' variant='h2'>
          DISCOVER OUR COLLECTIONS
        </Typography>
        <Typography
          align='center'
          variant='body2'
          style={{ margin: '2.4em 5em' }}
        >
          Designed with attitude and crafted with passion, our collections
          combine Dutch design with Swiss engineering.
        </Typography>
      </Grid>
      {collections.map((collection, i) => (
        <CollectionCardContainer key={i} collection={collection} />
      ))}
    </Grid>
  );
};

export default Collection;
