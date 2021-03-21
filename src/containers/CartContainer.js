import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../redux/cart/cartActions';
import { selectCartItemsCount } from '../redux/cart/cartSelectors';
import Cart from '../components/cart/Cart';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const CartContainer = connect(mapStateToProps, { toggleCartHidden })(Cart);
export default CartContainer;
