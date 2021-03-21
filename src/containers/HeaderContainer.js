import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { setTabIndex } from '../redux/tabs/tabsActions';
import Header from '../components/header/Header';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { setTabIndex })(Header);
