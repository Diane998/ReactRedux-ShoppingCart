import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectFilterByCollection = createSelector(
  [selectShop],
  shop => shop.filterByCollection
);

const selectFilterByPrice = createSelector(
  [selectShop],
  shop => shop.filterByPrice
);

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
      ? collections[collectionId].items.filter((item, i) =>
          Object.values(item).includes(watchId) ? item : null
        )
      : null
  );

export const selectItemsByPrice = price =>
  createSelector([selectCollectionsForPreview], collections =>
    collections && price
      ? collections
          .map(({ items }) =>
            items.filter(
              item => item.price >= price.from && item.price <= price.until
            )
          )
          .flat()
      : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!!shop.collections
);
