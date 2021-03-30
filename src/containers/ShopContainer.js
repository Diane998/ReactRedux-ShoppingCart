import { connect } from 'react-redux';
import { compose } from 'redux';

import { filterByCollection } from '../redux/shop/shopActions';
// import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionLoaded,
  selectCollectionsForPreview,
  selectCollection
} from '../redux/shop/shopSelectors';

import WithSpinner from '../components/spinner/WithSpinner';
import Shop from '../components/Shop';

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectIsCollectionLoaded(state),
  collections: selectCollectionsForPreview(state),
  filteredCollection: selectCollection(state.shop.filterByCollection)(state)
});

export default compose(
  connect(mapStateToProps, { filterByCollection }),
  WithSpinner
)(Shop);
