import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import shopReducer from './shopReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  tabs: tabsReducer,
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer
});
