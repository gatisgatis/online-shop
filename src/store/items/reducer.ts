import { cloneDeep } from 'lodash';
import { allItems } from '../../data/items';
import { CHANGE_ITEM_COUNT, ADD_ITEMS, DELETE_ITEMS, EDIT_ITEM, ItemActions } from './types';

const defaultState = allItems;

export const itemReducer = (state = defaultState, action: ItemActions) => {
  switch (action.type) {
    case CHANGE_ITEM_COUNT: {
      const index = state.findIndex((it) => it.id === action.id);
      if (index < 0) {
        return state;
      }
      const newState = cloneDeep(state);
      newState[index].countSelected = action.countSelected;
      return newState;
    }
    case ADD_ITEMS: {
      const newState = cloneDeep(state);
      newState.push(...action.items);
      return newState;
    }
    case DELETE_ITEMS: {
      const newState = cloneDeep(state);
      action.ids.forEach((id) => {
        const index = state.findIndex((item) => item.id === id);
        if (index >= 0) {
          newState.splice(index, 1);
        }
      });
      return newState;
    }
    case EDIT_ITEM: {
      const index = state.findIndex((it) => it.id === action.item.id);
      if (index < 0) {
        return state;
      }
      const newState = cloneDeep(state);
      newState[index] = action.item;
      return newState;
    }
    default:
      return state;
  }
};
