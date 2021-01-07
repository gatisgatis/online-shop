import {
  CHANGE_ACTIVE_CATEGORIES,
  CHANGE_SEARCH_KEY,
  CHANGE_SORT_ORDER,
  FilterActions,
} from './types';

export const changeActiveCategories = (categories: string[]): FilterActions => {
  return {
    type: CHANGE_ACTIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
};

export const changeSortOrder = (sortOrder: string): FilterActions => {
  return {
    type: CHANGE_SORT_ORDER,
    payload: {
      sortOrder,
    },
  };
};

export const changeSearchKey = (searchKey: string): FilterActions => {
  return {
    type: CHANGE_SEARCH_KEY,
    payload: {
      searchKey,
    },
  };
};
