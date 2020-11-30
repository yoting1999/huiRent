import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/store/reducers/index'
import AllRouter from './src/navigation/index'
import { firebase_config } from './firebase_config'

const store = createStore(reducers)

const store = createStore(reducers)

export default function App() {
  return (
    <Provider store={store}>
       <AllRouter/>
    </Provider>
  )
}
