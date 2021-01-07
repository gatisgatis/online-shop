import {
  CHANGE_ACTIVE_CATEGORIES,
  CHANGE_SEARCH_KEY,
  CHANGE_SORT_ORDER,
  FilterActions,
  Filter,
} from './types';

const defaultFilter: Filter = {
  categories: [],
  searchKey: '',
  sortOrder: 'Jaunākās',
};

export const filterReducer = (state = defaultFilter, action: FilterActions): Filter => {
  switch (action.type) {
    case CHANGE_ACTIVE_CATEGORIES: {
      const newState = { ...state };
      newState.categories = [...action.payload.categories];
      return newState;
    }
    case CHANGE_SORT_ORDER: {
      const newState = { ...state };
      newState.sortOrder = action.payload.sortOrder;
      return newState;
    }
    case CHANGE_SEARCH_KEY: {
      const newState = { ...state };
      newState.searchKey = action.payload.searchKey;
      return newState;
    }
    default:
      return state;
  }
};
