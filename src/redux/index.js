import { combineReducers } from 'redux';
import tabsReducer from './tabs/tabsReducer';
import shopReducer from './shop/shopReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  tabs: tabsReducer,
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer
});
