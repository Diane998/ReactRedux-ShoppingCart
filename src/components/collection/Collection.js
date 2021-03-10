import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import CollectionItemPreview from './CollectionItemPreview';

const Collection = ({ collection, fetchCollections }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return collection ? (
    <Grid
      container
      spacing={3}
      justify='center'
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
          image={collection.collectionPage.imageUrl}
        />
      </Grid>
      <Grid
        item
        style={{
          margin: '1em 0.5em 5em 0.5em',
          width: matchesMD ? '100%' : '50%'
        }}
      >
        <Typography
          align='center'
          variant={matchesMD ? 'h3' : 'h1'}
          style={{
            color: 'black',
            margin: '0.5em 0'
          }}
        >
          {collection.title.toUpperCase()}
        </Typography>
        <Typography
          align={matchesMD ? 'left' : 'center'}
          variant='body2'
          style={{
            lineHeight: '1.7em'
          }}
        >
          {collection.collectionPage.description}
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        spacing={3}
        style={{ margin: '0 auto', padding: 0 }}
      >
        <Grid item>
          <Typography
            align='center'
            variant={matchesMD ? 'h3' : 'h1'}
            style={{ color: 'black' }}
          >
            MEET THE {collection.title.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item container spacing={4} justify='center'>
          {collection.items.map(({ id, ...otherProps }) => (
            <Grid item key={id} style={{ margin: '0.5em 0' }}>
              <CollectionItemPreview id={id} {...otherProps} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : null;
};

export default Collection;