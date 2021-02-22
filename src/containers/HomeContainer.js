import { connect } from 'react-redux';
import Home from '../components/pages/Home';

const mapStateToProps = ({ shop: { collections } }) => ({
  collections: collections
    ? Object.keys(collections).map(key => collections[key])
    : null
});

const HomenContainer = connect(mapStateToProps)(Home);

export default HomenContainer;
