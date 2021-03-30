import React from 'react';
import Spinner from './Spinner';

const WithSPinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSPinner;
