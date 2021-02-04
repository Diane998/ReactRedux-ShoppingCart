import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

const CollectionItemPreview = ({
  collection,
  id,
  itemPage,
  name,
  price,
  routeName,
  history
}) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card
        className={classes.root}
        onClick={() =>
          history.push(`${history.location.pathname}/${routeName}`)
        }
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
                align='left'
                style={{
                  position: 'absolute',
                  top: '8em',
                  left: '0.5em'
                }}
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant='h4'
                style={{
                  position: 'absolute',
                  top: '11em',
                  right: '0.5em'
                }}
              >
                ${price}
              </Typography>
            </div>
            <Typography
              variant='body2'
              component='p'
              align='left'
              style={{ color: 'grey', left: '0.5em', marginTop: '2.8em' }}
            >
              {collection.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withRouter(CollectionItemPreview);
