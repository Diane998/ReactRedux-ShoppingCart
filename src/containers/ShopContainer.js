import { connect } from 'react-redux';

import Shop from '../components/Shop';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

export default connect(mapStateToProps)(Shop);
