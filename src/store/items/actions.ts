import {
  Item,
  SELECT_ITEM,
  CHANGE_ITEM_COUNT,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ItemActions,
} from './types';

export const selectItem = (id: string): ItemActions => {
  return {
    type: SELECT_ITEM,
    id,
  };
};

export const changeItemCount = (idd: string, countSelecteddas: number): ItemActions => {
  return {
    type: CHANGE_ITEM_COUNT,
    id: idd,
    countSelected: countSelecteddas,
  };
};

export const addItem = (item: Item): ItemActions => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const editItem = (item: Item): ItemActions => {
  return {
    type: EDIT_ITEM,
    item,
  };
};

export const deleteItem = (id: string): ItemActions => {
  return {
    type: DELETE_ITEM,
    id,
  };
};
