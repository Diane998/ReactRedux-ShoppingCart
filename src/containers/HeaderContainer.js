import { connect } from 'react-redux';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { setTabIndex } from '../redux/tabs/tabsActions';
import Header from '../components/header/Header';

const mapStateToProps = state => ({ currentUser: selectCurrentUser(state) });

export default connect(mapStateToProps, { setTabIndex })(Header);
