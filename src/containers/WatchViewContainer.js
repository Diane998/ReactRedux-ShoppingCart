import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/shop/shopActions';

import WatchView from '../components/watch/WatchView';

const mapStateToProps = ({ shop: { collections } }, ownProps) => ({
  watch: collections
    ? collections[
        ownProps.match.params.collection_id
      ].items.filter((itemObj, i) =>
        Object.values(itemObj).includes(ownProps.match.params.watch_id)
          ? itemObj
          : null
      )
    : null
});

export default connect(mapStateToProps, { fetchCollections })(WatchView);
