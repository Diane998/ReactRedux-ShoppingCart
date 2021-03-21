import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shopSelectors';
import Collection from '../components/collection/Collection';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection_id)(state)
});

export default connect(mapStateToProps)(Collection);
