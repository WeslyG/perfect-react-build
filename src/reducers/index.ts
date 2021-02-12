import { combineReducers } from 'redux';
import { filterReducer } from './filter';
import { todoReducer } from './todo';

export const rootReducer = combineReducers({
  filter: filterReducer,
  app: todoReducer,
});
