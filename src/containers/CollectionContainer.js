import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/shop/shopActions';

import Collection from '../components/collection/Collection';

const mapStateToProps = ({ shop: { collections } }, ownProps) => ({
  collection: collections
    ? collections[ownProps.match.params.collection_id]
    : null
});

export default connect(mapStateToProps, { fetchCollections })(Collection);
