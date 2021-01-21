import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/shop/shopActions';
import App from '../components/App';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : []
});

export default connect(mapStateToProps, { fetchCollections })(App);
