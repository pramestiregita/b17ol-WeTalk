import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(logger));
  const persistor = persistStore(store);
  return {store, persistor};
};
