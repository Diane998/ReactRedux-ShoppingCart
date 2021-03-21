import { connect } from 'react-redux';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { setCurrentUser } from '../redux/user/userActions';
import { fetchCollections } from '../redux/shop/shopActions';

import App from '../components/App';

const mapStateToProps = state => ({ currentUser: selectCurrentUser(state) });

export default connect(mapStateToProps, { fetchCollections, setCurrentUser })(
  App
);
