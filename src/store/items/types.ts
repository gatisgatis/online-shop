export const SELECT_ITEM = 'SELECT_ITEM';
export const CHANGE_ITEM_COUNT = 'CHANGE_ITEM_COUNT';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export interface Item {
  id: string;
  name: string;
  price: number;
  isSelected: boolean;
  countAvailable: number;
  countSelected: number;
  specs: {
    color: string;
    weight: number;
    volume: number;
  };
  discount: number;
  images: string[];
}

interface SelectItemAction {
  type: string;
  id: string;
}

interface ChangeCountAction {
  type: string;
  id: string;
  countSelected: number;
}

interface AddItemAction {
  type: string;
  item: Item;
}

interface EditItemAction {
  type: string;
  item: Item;
}

interface DeleteItemAction {
  type: string;
  id: string;
}

export type ItemActions =
  | SelectItemAction
  | ChangeCountAction
  | AddItemAction
  | EditItemAction
  | DeleteItemAction;
