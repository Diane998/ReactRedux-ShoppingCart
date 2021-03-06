import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  FILTER_BY_COLLECTION,
  FILTER_BY_PRICE
} from './shopActionTypes';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollections = () => async dispatch => {
  const collectionRef = firestore.collection('collections');
  const snapshot = await collectionRef.get();
  dispatch({ type: FETCH_COLLECTIONS_START });

  try {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: collectionsMap });
  } catch (err) {
    dispatch({ type: FETCH_COLLECTIONS_FAILURE, payload: err.message });
  }
};

export const filterByCollection = collection => ({
  type: FILTER_BY_COLLECTION,
  payload: collection
});

export const filterByPrice = filterPrice => ({
  type: FILTER_BY_PRICE,
  payload: filterPrice
});
