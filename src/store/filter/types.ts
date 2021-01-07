export const CHANGE_ACTIVE_CATEGORIES = 'CHANGE_ACTIVE_CATEGORIES';
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER';
export const CHANGE_SEARCH_KEY = 'CHANGE_SEARCH_KEY';

export interface Filter {
  categories: string[];
  sortOrder: string;
  searchKey: string;
}

interface ChangeActiveCategoriesAction {
  type: typeof CHANGE_ACTIVE_CATEGORIES;
  payload: {
    categories: string[];
  };
}

interface ChangeSortOrderAction {
  type: typeof CHANGE_SORT_ORDER;
  payload: {
    sortOrder: string;
  };
}

interface ChangeSearchKeyAction {
  type: typeof CHANGE_SEARCH_KEY;
  payload: {
    searchKey: string;
  };
}

export type FilterActions =
  | ChangeActiveCategoriesAction
  | ChangeSearchKeyAction
  | ChangeSortOrderAction;
