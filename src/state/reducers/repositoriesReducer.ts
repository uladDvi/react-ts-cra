import { ActionType } from '../action-types';
import { RepositoryAction } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (state: RepositoriesState = initialState,
  action: RepositoryAction): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      console.log('a', action);
      return { ...state, loading: false, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default repositoriesReducer;
