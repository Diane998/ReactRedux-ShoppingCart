import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/actions/cart/cartActions';
import Cart from '../components/cart/Cart';

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const CartContainer = connect(mapStateToProps, { toggleCartHidden })(Cart);
export default CartContainer;
