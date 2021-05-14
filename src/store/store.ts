import { createStore } from 'redux';
import { appReducer } from './reducers';

export const configureStore = () => {
  return createStore(appReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
};
