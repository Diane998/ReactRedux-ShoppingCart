import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  selectIsCollectionLoaded,
  selectCollection
} from '../redux/shop/shopSelectors';

import WithSpinner from '../components/WithSpinner';
import Collection from '../components/collection/Collection';

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectIsCollectionLoaded(state),
  collection: selectCollection(ownProps.match.params.collection_id)(state)
});

export default compose(connect(mapStateToProps), WithSpinner)(Collection);
