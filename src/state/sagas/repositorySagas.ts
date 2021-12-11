import {
  call, put, takeLatest, fork,
} from 'redux-saga/effects';
import { ActionType } from '../action-types';
import { repositoryActionCreators } from '../action-creators';

function* searchRepositories() {
  console.log('HERE WE ARE WITH SOME CALL TO APO');
  yield put(repositoryActionCreators.searchRepositoriesSuccess(['Alex']));
}

function* watchSearchRepositories() {
  yield takeLatest(ActionType.SEARCH_REPOSITORIES, searchRepositories);
}

const repositorySagas = [
  fork(watchSearchRepositories),
];

export default repositorySagas;
