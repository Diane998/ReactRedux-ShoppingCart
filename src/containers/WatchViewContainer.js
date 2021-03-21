import { connect } from 'react-redux';
import { selectItem } from '../redux/shop/shopSelectors';
import { addItem } from '../redux/cart/cartActions';

import WatchView from '../components/watch/WatchView';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(
    ownProps.match.params.collection_id,
    ownProps.match.params.watch_id
  )(state)
});

export default connect(mapStateToProps, { addItem })(WatchView);
