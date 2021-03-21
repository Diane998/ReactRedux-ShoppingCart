import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartVisibility } from '../redux/cart/cartSelectors';
import { selectTabIndex } from '../redux/tabs/tabsSelectors';
import { setTabIndex } from '../redux/tabs/tabsActions';
import TabItems from '../components/header/TabItems';

const mapStateToProps = createStructuredSelector({
  tabIndex: selectTabIndex,
  hidden: selectCartVisibility
});

export default connect(mapStateToProps, { setTabIndex })(TabItems);
