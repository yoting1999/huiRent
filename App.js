import React from 'react';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducers from './src/store/reducers/index'
import AllRouter from './src/navigation/index'
import { firebase_config } from './firebase_config'

const store = createStore(reducers, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
       <AllRouter/>
    </Provider>
  )
}
