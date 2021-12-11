import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootReducer } from '../state/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;
