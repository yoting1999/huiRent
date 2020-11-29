import React from 'react'
import { combineReducers } from 'redux'
import authReducer from './auth/index'


const reducers = combineReducers({
  authReducer
})

export default reducers