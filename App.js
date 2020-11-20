import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store from './src/redux/store';

import Main from './src/screens/Main';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
