import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/shop/shopActions';

import Shop from '../components/Shop';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

export default connect(mapStateToProps, { fetchCollections })(Shop);
