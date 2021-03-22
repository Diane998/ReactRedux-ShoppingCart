import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../redux/cart/cartActions';

import Checkout from '../components/checkout/Checkout';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, {
  clearItemFromCart,
  addItem,
  removeItem
})(Checkout);
