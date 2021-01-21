import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/shop/shopActions';
import App from '../components/App';

const mapStateToProps = ({ collections }) => ({
  collections
});

export default connect(mapStateToProps, { fetchCollections })(App);
