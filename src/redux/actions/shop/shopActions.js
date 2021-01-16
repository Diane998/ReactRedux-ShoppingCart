import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './shopActionTypes';

export const fetchCollectionsSuccess = collections => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStart = () => async dispatch => {
  try {
    let res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();

    dispatch(fetchCollectionsSuccess(products));
  } catch (err) {
    dispatch(fetchCollectionsFailure(err.message));
  }
};
