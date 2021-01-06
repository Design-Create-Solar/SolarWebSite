import { createStore, combineReducers } from 'redux';
import reducers from '../js/components/DataPage/reducers';

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers
    }),
    {},
  );
}