import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../redux/cart/cartActions';

import CartDropdown from '../components/cart/CartDropdown';

const mapStateToProps = ({ cart: { cartItems, hidden } }) => ({
  cartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
