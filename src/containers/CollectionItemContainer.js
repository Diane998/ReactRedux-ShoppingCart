import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cartActions';

import CollectionItem from '../components/collection/CollectionItem';

export default connect(null, { addItem })(CollectionItem);
