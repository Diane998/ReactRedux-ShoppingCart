import React from 'react';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  media: {
    position: 'relative',
    width: 350,
    height: 380,
    zIndex: 300
  },
  overlay: {
    position: 'absolute',
    height: '200px',
    width: '100%',
    top: 150,
    left: 0,
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.1)',
    padding: '3em 0'
  }
}));

const CollectionItemPreview = ({ collection, id, itemPage, name }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid item>
      <Card
        className={classes.root}
        style={{
          border: 'none',
          boxShadow: 'none',
          maxWidth: 410,
          height: 480
        }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={itemPage.imageUrl[0]} />
          <CardContent>
            <div className={classes.overlay}>
              <Typography
                gutterBottom
                variant='h2'
                component='h2'
                style={{
                  position: 'absolute',
                  top: '8em',
                  left: 25
                }}
              >
                {name}
              </Typography>
            </div>
            <Typography
              variant='body2'
              component='p'
              style={{ color: 'grey', margin: '2.8em 0 0 25px' }}
            >
              {collection.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CollectionItemPreview;
