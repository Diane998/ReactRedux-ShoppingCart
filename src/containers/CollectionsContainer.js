import { connect } from 'react-redux';
import Collections from '../components/pages/Collections';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

const CollectionContainer = connect(mapStateToProps)(Collections);

export default CollectionContainer;
