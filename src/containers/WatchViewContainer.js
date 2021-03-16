import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cartActions';

import WatchView from '../components/watch/WatchView';

const mapStateToProps = ({ shop: { collections } }, ownProps) => ({
  item: collections
    ? collections[
        ownProps.match.params.collection_id
      ].items.filter((itemObj, i) =>
        Object.values(itemObj).includes(ownProps.match.params.watch_id)
          ? itemObj
          : null
      )
    : null
});

export default connect(mapStateToProps, { addItem })(WatchView);
