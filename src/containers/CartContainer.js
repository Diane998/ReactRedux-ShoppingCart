import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../redux/cart/cartActions';

import Cart from '../components/cart/Cart';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, {
  clearItemFromCart,
  addItem,
  removeItem
})(Cart);
