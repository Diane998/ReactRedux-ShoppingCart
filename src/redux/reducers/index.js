import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import shopReducer from './shopReducer';

export default combineReducers({ tabs: tabsReducer, shop: shopReducer });
