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
      const collections = { electronics: [], jewelry: [], men: [], women: [] };

      action.payload.forEach(p =>
        p.category === 'electronics'
          ? collections.electronics.push(p)
          : p.category === 'jewelry'
          ? collections.jewelry.push(p)
          : p.category === 'men clothing'
          ? collections.men.push(p)
          : p.category === 'women clothing'
          ? collections.women.push(p)
          : null
      );

      return { ...state, collections: collections };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, errMeassage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
