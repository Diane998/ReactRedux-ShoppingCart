import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../redux/cart/cartSelectors';
import { toggleCartHidden } from '../redux/cart/cartActions';

import CartDropdown from '../components/cart/CartDropdown';

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
