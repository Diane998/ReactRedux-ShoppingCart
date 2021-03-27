import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cartSelectors';
import { toggleCartHidden } from '../redux/cart/cartActions';

import CartDropdown from '../components/cart/CartDropdown';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
