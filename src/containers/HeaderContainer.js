import { connect } from 'react-redux';
import { setTabIndex } from '../redux/tabs/tabsActions';
import Header from '../components/header/Header';

const mapStateToProps = ({ user: { currentUser } }) => ({ currentUser });

export default connect(mapStateToProps, { setTabIndex })(Header);
