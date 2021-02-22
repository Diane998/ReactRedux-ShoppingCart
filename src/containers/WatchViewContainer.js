import { connect } from 'react-redux';
import WatchView from '../components/watch/WatchView';

const mapStateToProps = ({ shop: { collections } }, ownProps) => {
  const collection = collections[ownProps.match.params.collection_id];

  // console.log(collections);
  const watch = collection.items.filter((itemObj, i) =>
    Object.values(itemObj).includes(ownProps.match.params.watch_id)
      ? itemObj
      : null
  );

  return { watch, collection };
  // return { rand: '12' };
};

const WatchViewContainer = connect(mapStateToProps)(WatchView);

export default WatchViewContainer;
