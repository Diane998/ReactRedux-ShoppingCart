import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../actions/shop/shopActionTypes';

const INITIAL_STATE = {
  collections: null,
  errMeassage: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, errMeassage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
