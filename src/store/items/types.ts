import { Item } from '../../types/item';

export const CHANGE_ITEM_COUNT = 'CHANGE_ITEM_COUNT';
export const DELETE_ITEMS = 'DELETE_ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';

interface ChangeCountAction {
  type: typeof CHANGE_ITEM_COUNT;
  id: string;
  countSelected: number;
}

interface AddItemsAction {
  type: typeof ADD_ITEMS;
  items: Item[];
}

interface EditItemAction {
  type: typeof EDIT_ITEM;
  item: Item;
}

interface DeleteItemsAction {
  type: typeof DELETE_ITEMS;
  ids: string[];
}

export type ItemActions = ChangeCountAction | AddItemsAction | EditItemAction | DeleteItemsAction;
