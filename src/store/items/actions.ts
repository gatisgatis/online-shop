import { CHANGE_ITEM_COUNT, ADD_ITEMS, DELETE_ITEMS, EDIT_ITEM, ItemActions } from './types';
import { Item } from '../../types/item';

export const changeItemCount = (id: string, countSelected: number): ItemActions => {
  return {
    type: CHANGE_ITEM_COUNT,
    id,
    countSelected,
  };
};

export const addItems = (items: Item[]): ItemActions => {
  return {
    type: ADD_ITEMS,
    items,
  };
};

export const editItem = (item: Item): ItemActions => {
  return {
    type: EDIT_ITEM,
    item,
  };
};

export const deleteItems = (ids: string[]): ItemActions => {
  return {
    type: DELETE_ITEMS,
    ids,
  };
};
