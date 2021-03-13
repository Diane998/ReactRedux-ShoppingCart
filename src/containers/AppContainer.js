import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/actions/user/userActions';
import { fetchCollections } from '../redux/actions/shop/shopActions';

import App from '../components/App';

const mapStateToProps = ({ user: { currentUser } }) => ({ currentUser });

export default connect(mapStateToProps, { fetchCollections, setCurrentUser })(
  App
);
