import React from 'react'
import { AUTH_LOGIN, AUTH_LOGOUT, SET_AUTH_INFO } from '../../actions/auth'

const initState = {
  login: false,
  userInfo: null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        login: action.payload
      };
    }
    case AUTH_LOGOUT: {
      return {
        login: action.payload
      }
    }
    case SET_AUTH_INFO: {
      return {
        ...state,
        userInfo: {
          date: action.payload.date,
          email: action.payload.email,
          name: action.payload.name,
          uid: action.payload.uid
        }
      }
    }
    default:
      return state;
  }
};

export default reducer