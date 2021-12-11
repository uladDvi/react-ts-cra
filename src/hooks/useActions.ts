import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repositoryActionCreators } from '../state/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(repositoryActionCreators, dispatch);
};
