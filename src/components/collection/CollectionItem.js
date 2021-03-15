import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  IconButton,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from '@material-ui/core';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

const useStyles = makeStyles(theme => ({
  media: {
    position: 'relative',
    width: 350,
    height: 380,
    zIndex: 2
  },
  overlay: {
    position: 'absolute',
    height: '190px',
    width: '100%',
    top: 150,
    left: 0,
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.1)',
    padding: '3em 0'
  },
  button: {
    margin: '1em 0',
    padding: '0.4em 1.5em',
    borderRadius: 0,
    fontSize: '1.1em'
  }
}));

const CollectionItem = ({ item, history, collectionRouteName, addItem }) => {
  const classes = useStyles();

  const { collectionName, itemPage, name, price, routeName } = item;

  return (
    <Card
      className={classes.root}
      style={{
        border: 'none',
        boxShadow: 'none',
        maxWidth: 410,
        height: 480
      }}
    >
      <CardActionArea disableRipple>
        <CardMedia
          onClick={() =>
            collectionRouteName
              ? history.push(`collections/${collectionRouteName}/${routeName}`)
              : history.push(`${history.location.pathname}/${routeName}`)
          }
          className={classes.media}
          image={itemPage.imageUrl[0]}
        />
        <div className={classes.overlay}></div>
      </CardActionArea>
      <CardContent>
        <Grid container direction='column'>
          <Grid
            item
            container
            justify='space-between'
            alignItems='center'
            direction='row'
          >
            <Grid item>
              <Typography
                onClick={() =>
                  collectionRouteName
                    ? history.push(
                        `collections/${collectionRouteName}/${routeName}`
                      )
                    : history.push(`${history.location.pathname}/${routeName}`)
                }
                gutterBottom
                variant='h2'
                component='h2'
                align='left'
                style={{ margin: 0, cursor: 'pointer' }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant='h4' style={{ fontWeight: 700 }}>
                ${price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify='space-between' direction='row'>
            <Grid item>
              <Typography
                onClick={() =>
                  collectionRouteName
                    ? history.push(`collections/${collectionRouteName}`)
                    : null
                }
                variant='body2'
                component='p'
                align='left'
                style={{
                  color: 'grey',
                  left: '0.5em',
                  fontWeight: 700,
                  cursor: collectionRouteName ? 'pointer' : 'default'
                }}
              >
                {collectionName.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => addItem(item)}
                aria-label='add-to-cart'
                className={classes.margin}
                size='small'
                variant='outlined'
                style={{ paddingTop: 0 }}
              >
                <Icon style={{ height: 24, width: 24 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withRouter(CollectionItem);
