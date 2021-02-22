import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/shop/shopActions';
import App from '../components/App';

const AppContainer = connect(null, { fetchCollections })(App);

export default AppContainer;
