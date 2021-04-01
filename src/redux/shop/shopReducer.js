import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  FILTER_BY_COLLECTION,
  FILTER_BY_PRICE
} from './shopActionTypes';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMeassage: '',
  filterByCollection: null,
  filterByPrice: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errMeassage: action.payload };
    case FILTER_BY_COLLECTION:
      return { ...state, filterByCollection: action.payload };
    case FILTER_BY_PRICE:
      return { ...state, filterByPrice: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
