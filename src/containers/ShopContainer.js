import { connect } from 'react-redux';
import { compose } from 'redux';

import { filterByCollection, filterByPrice } from '../redux/shop/shopActions';
import {
  selectIsCollectionLoaded,
  selectCollectionsForPreview,
  selectCollection,
  selectItemsByPrice
} from '../redux/shop/shopSelectors';

import WithSpinner from '../components/spinner/WithSpinner';
import Shop from '../components/Shop';

const mapStateToProps = state => ({
  isLoading: selectIsCollectionLoaded(state),
  collections: selectCollectionsForPreview(state),
  filteredByCollection: selectCollection(state.shop.filterByCollection)(state),
  filteredByPrice: selectItemsByPrice(state.shop.filterByPrice)(state)
});

export default compose(
  connect(mapStateToProps, { filterByCollection, filterByPrice }),
  WithSpinner
)(Shop);
