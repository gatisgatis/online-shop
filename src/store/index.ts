import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemReducer } from './items/reducer';
import { settingsReducer } from './settings/reducer';
import { userReducer } from './user/reducer';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
  items: itemReducer,
  settings: settingsReducer,
  user: userReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type RootState = ReturnType<typeof rootReducer>;
