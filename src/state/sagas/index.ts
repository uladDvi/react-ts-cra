import { all } from 'redux-saga/effects';
import repositorySagas from './repositorySagas';

export function* rootSaga(): Generator {
  yield all([...repositorySagas]);
}
