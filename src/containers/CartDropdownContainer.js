import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../redux/actions/cart/cartActions';

import CartDropdown from '../components/cart/CartDropdown';

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
