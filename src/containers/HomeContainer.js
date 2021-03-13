import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

export default connect(mapStateToProps)(Home);
