import { createSelector } from 'reselect';

const selectTabs = state => state.tabs;

export const selectTabIndex = createSelector(
  [selectTabs],
  tabs => tabs.tabIndex
);

export const selectDrawerOpen = createSelector(
  [selectTabs],
  tabs => tabs.drawerOpen
);
