import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const CollectionCard = ({
  collection: { title, imageUrl, description, routeName },
  classes,
  matchesMD,
  history
}) => (
  <Card
    className={classes.root}
    style={{
      border: 'none',
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

export default withRouter(CollectionCard);
