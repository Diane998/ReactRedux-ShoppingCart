import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import CollectionItemContainer from '../../containers/CollectionItemContainer';

const useStyles = makeStyles(theme => ({
  preview: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const Collection = ({ collection }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
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
        {matchesSM ? (
          <div
            className={classes.preview}
            style={{
              width: '100vw',
              overflowX: matchesMD ? 'scroll' : 'hidden',
              margin: '2em 0'
            }}
          >
            {collection.items.map((item, i) => (
              <div key={i} style={{ margin: '1em' }}>
                <CollectionItemContainer item={item} />
              </div>
            ))}
          </div>
        ) : (
          <Grid
            item
            container
            spacing={matchesSM ? 0 : 4}
            justify='center'
            style={{ width: '100vw' }}
          >
            {collection.items.map((item, i) => (
              <Grid item key={i} style={{ margin: '0.5em 0' }}>
                <CollectionItemContainer item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Collection;
