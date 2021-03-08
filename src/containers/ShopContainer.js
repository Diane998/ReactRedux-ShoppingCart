import { connect } from 'react-redux';
import Shop from '../components/pages/Shop';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

const ShopnContainer = connect(mapStateToProps)(Shop);

export default ShopnContainer;
