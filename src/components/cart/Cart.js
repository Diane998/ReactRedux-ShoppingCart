import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

const CartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

const Cart = ({ cartItems, toggleCartHidden }) => (
  <CartIcon onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCount className='item-count'>0</ItemCount>
  </CartIcon>
);

export default Cart;
