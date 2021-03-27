import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionLoaded,
  selectCollectionsForPreview
} from '../redux/shop/shopSelectors';

import WithSpinner from '../components/WithSpinner';
import Shop from '../components/Shop';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoaded,
  collections: selectCollectionsForPreview
});

export default compose(connect(mapStateToProps), WithSpinner)(Shop);
