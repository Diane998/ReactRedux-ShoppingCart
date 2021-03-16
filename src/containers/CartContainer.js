import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cartActions';
import { selectCartItemsCount } from '../redux/cart/cartSelectors';
import Cart from '../components/cart/Cart';

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const CartContainer = connect(mapStateToProps, { toggleCartHidden })(Cart);
export default CartContainer;
