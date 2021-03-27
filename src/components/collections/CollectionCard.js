import React from 'react';
import { withRouter } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    position: 'relative'
  },
  media: {
    height: 280
  },
  overlay: {
    position: 'absolute',
    height: 280,
    width: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  }
}));

const CollectionCard = ({
  collection: { title, imageUrl, description, routeName },
  history
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      className={classes.root}
      style={{
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none',
        width: matchesMD ? '100vw' : 345
      }}
      onClick={() => history.push(`/collections/${routeName}`)}
    >
      <CardActionArea disableRipple>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <div className={classes.overlay}>
            <Typography
              gutterBottom
              variant='h3'
              component='h3'
              style={{
                color: 'white',
                position: 'relative',
                margin: '6em 0.5em'
              }}
            >
              {title.toUpperCase()}
            </Typography>
          </div>
          <Typography variant='body2' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(CollectionCard);
