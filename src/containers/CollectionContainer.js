import { connect } from 'react-redux';
import Collection from '../components/pages/Collection';

const mapStateToProps = ({ shop: { collections } }, ownProps) => ({
  collection: collections
    ? collections[ownProps.match.params.collection_id]
    : null
});

const CollectionContainer = connect(mapStateToProps)(Collection);

export default CollectionContainer;
