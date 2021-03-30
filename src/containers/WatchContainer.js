import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  selectIsCollectionLoaded,
  selectItem
} from '../redux/shop/shopSelectors';
import { addItem } from '../redux/cart/cartActions';

import WithSpinner from '../components/spinner/WithSpinner';
import Watch from '../components/watch/Watch';

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectIsCollectionLoaded(state),
  item: selectItem(
    ownProps.match.params.collection_id,
    ownProps.match.params.watch_id
  )(state)
});

export default compose(
  connect(mapStateToProps, { addItem }),
  WithSpinner
)(Watch);
