// action types responsible for identifying what we receive from our requests
// this is critical for reducers, reducers gonna receive this types

import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type RepositoryAction = SearchRepositoriesAction | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
