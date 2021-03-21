import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTabIndex, selectDrawerOpen } from '../redux/tabs/tabsSelectors';
import { setTabIndex, setDrawerOpen } from '../redux/tabs/tabsActions';
import Drawer from '../components/header/Drawer';

const mapStateToProps = createStructuredSelector({
  tabIndex: selectTabIndex,
  drawerOpen: selectDrawerOpen
});

export default connect(mapStateToProps, { setTabIndex, setDrawerOpen })(Drawer);
