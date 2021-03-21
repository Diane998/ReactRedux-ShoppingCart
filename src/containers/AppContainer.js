import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { setCurrentUser } from '../redux/user/userActions';
import { fetchCollections } from '../redux/shop/shopActions';

import App from '../components/App';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { fetchCollections, setCurrentUser })(
  App
);
