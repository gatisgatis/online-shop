import { createStore, combineReducers } from 'redux';
import { itemReducer } from './items/reducer';
import { settingsReducer } from './settings/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
  items: itemReducer,
  settings: settingsReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
