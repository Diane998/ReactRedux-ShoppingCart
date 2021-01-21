import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: 'relative'
  },
  media: {
    height: 250
  },
  overlay: {
    position: 'absolute',
    height: '250px',
    width: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  }
});

const Collection = ({ collections }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify='center' style={{ padding: '0 5em' }}>
      <Grid item xs={12} style={{ margin: '2.5em 0' }}>
        <Typography align='center' variant='h2'>
          DISCOVER OUR COLLECTIONS
        </Typography>
        <Typography
          align='center'
          variant='body2'
          style={{ marginTop: '2.4em' }}
        >
          Designed with attitude and crafted with passion, our collections
          combine Dutch design with Swiss engineering.
        </Typography>
      </Grid>
      {collections.map(({ title, imageUrl, description }, i) => (
        <Grid item key={i}>
          <Card
            className={classes.root}
            style={{ border: 'none', boxShadow: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={imageUrl} />
              <CardContent>
                <div className={classes.overlay}>
                  <Typography
                    align='flex-end'
                    gutterBottom
                    variant='h2'
                    component='h2'
                    style={{
                      color: 'white',
                      marginTop: '4em',
                      marginLeft: '0.5em'
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
        </Grid>
      ))}
    </Grid>
  );
};

export default Collection;
