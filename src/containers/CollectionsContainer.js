import { connect } from 'react-redux';

import Collections from '../components/collections/Collections';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

export default connect(mapStateToProps)(Collections);
