import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionId =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionId] : null
  );

export const selectItem = (collectionId, watchId) =>
  createSelector([selectShopCollections], collections =>
    collections
      ? collections[collectionId].items.filter((itemObj, i) =>
          Object.values(itemObj).includes(watchId) ? itemObj : null
        )
      : null
  );
