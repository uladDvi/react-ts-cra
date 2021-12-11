import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const rootReducers = combineReducers({
  repositories: repositoriesReducer,
});

export type RootReducer = ReturnType<typeof rootReducers>

export default rootReducers;
