import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

const WithSPinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Grid
      container
      justify='center'
      alignContent='center'
      style={{ width: '100vw', height: '80vh' }}
    >
      <Grid item>
        <CircularProgress
          style={{ color: '#c40d2e', width: '50px', height: '50px' }}
        />
      </Grid>
    </Grid>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSPinner;
