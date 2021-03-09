import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CollectionCard from '../components/collections/CollectionCard';

const useStyles = {
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
};

CollectionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const withMediaQuery = (mediaQueries = []) => Component => props => {
  const mediaQueryObj = {};
  mediaQueries.forEach(mq => {
    mediaQueryObj[mq[0]] = useMediaQuery(mq[1]);
  });

  return <Component {...mediaQueryObj} {...props} />;
};

export default withStyles(useStyles)(
  withMediaQuery([['matchesMD', theme => theme.breakpoints.down('md')]])(
    CollectionCard
  )
);
