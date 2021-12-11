import { RepositoryAction } from '../actions';
import { ActionType } from '../action-types';

// export const searchRepositories = (): RepositoryAction => ({
//   type: ActionType.SEARCH_REPOSITORIES,
// });

export const searchRepositories = (): RepositoryAction => {
  console.log('dsadasdasdasda');
  return {
    type: ActionType.SEARCH_REPOSITORIES,
  };
};

export const searchRepositoriesSuccess = (payload: string[]): RepositoryAction => ({
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
  payload,
});

export const searchRepositoriesFailure = (payload: string): RepositoryAction => ({
  type: ActionType.SEARCH_REPOSITORIES_ERROR,
  payload,
});
