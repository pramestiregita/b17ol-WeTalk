import React from 'react';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import {MenuProvider} from 'react-native-popup-menu';

import store from './src/redux/store';

import Main from './src/screens/Main';

export default function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <Main />
      </MenuProvider>
    </Provider>
    // <Provider store={store().store}>
    //   <PersistGate loading={null} persistor={store().persistor}>
    //     <MenuProvider>
    //       <Main />
    //     </MenuProvider>
    //   </PersistGate>
    // </Provider>
  );
}
