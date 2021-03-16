import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import CollectionCardContainer from '../../containers/CollectionCardContainer';

const Collections = ({ collections }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  return collections ? (
    <Grid
      container
      spacing={3}
      style={{
        width: matchesLG ? '100vw' : '80vw',
        margin: '0 auto'
      }}
    >
      <Grid item xs={12} style={{ margin: '2em 0' }}>
        <Typography
          align='center'
          variant='h1'
          style={{
            color: '#c40d2e',
            marginBottom: '0.7em',
            fontSize: matchesMD ? '2em' : '2.5em'
          }}
        >
          DISCOVER OUR COLLECTIONS
        </Typography>
        <Typography
          align='center'
          variant='body2'
          style={{
            marginBottom: '2em',
            fontSize: matchesMD ? '1.2em' : '1.5em'
          }}
        >
          Designed with attitude and crafted with passion, our collections
          combine Dutch design with Swiss engineering.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        spacing={matchesSM ? 0 : 4}
        style={{ margin: 0, padding: 0 }}
      >
        {collections.map((collection, i) => (
          <Grid item key={i} style={{ margin: matchesSM ? '1em 0' : 0 }}>
            <CollectionCardContainer collection={collection} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  ) : null;
};

export default Collections;
