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
      maxWidth: matchesMD ? 410 : 345
    }}
    onClick={() => history.push(`${history.location.pathname}/${routeName}`)}
  >
    <CardActionArea>
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
              bottom: '-62%',
              left: '5%'
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
