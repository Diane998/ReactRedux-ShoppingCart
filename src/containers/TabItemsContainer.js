import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabs/tabsActions';
import TabItems from '../components/header/TabItems';

const mapStateToProps = ({ tabs: { tabIndex }, cart: { hidden } }) => ({
  tabIndex,
  hidden
});

export default connect(mapStateToProps, { setTabIndex })(TabItems);
