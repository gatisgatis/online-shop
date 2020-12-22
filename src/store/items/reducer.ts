import { cloneDeep } from 'lodash';
import {
  Item,
  SELECT_ITEM,
  CHANGE_ITEM_COUNT,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ItemActions,
} from './types';

export const itemReducer = (state: Item[] = [], action: ItemActions) => {
  switch (action.type) {
    case SELECT_ITEM: {
      // @ts-ignore
      const index = state.findIndex((it) => it.id === action.id);
      if (index < 0) {
        return state;
      }
      const newState = cloneDeep(state);
      newState[index].isSelected = !newState[index].isSelected;
      return newState;
    }
    case CHANGE_ITEM_COUNT: {
      // @ts-ignore
      const index = state.findIndex((it) => it.id === action.id);
      if (index < 0) {
        return state;
      }
      const newState = cloneDeep(state);
      // @ts-ignore
      newState[index].countSelected = action.countSelected;
      return newState;
    }
    case ADD_ITEM: {
      const newState = cloneDeep(state);
      // @ts-ignore
      newState.push(action.item);
      return newState;
    }
    case DELETE_ITEM: {
      // @ts-ignore
      const index = state.findIndex((it) => it.id === action.id);
      if (index < 0) {
        return state;
      }
      const newState = cloneDeep(state);
      newState.splice(index, 1);
      return newState;
    }
    case EDIT_ITEM: {
      // @ts-ignore
      const index = state.findIndex((it) => it.id === action.id);
      if (index < 0) {
        return state;
      }
      const newState = cloneDeep(state);
      // @ts-ignore
      newState[index] = action.item;
      return newState;
    }
    default:
      return state;
  }
};
