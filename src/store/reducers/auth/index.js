import React from 'react'
import { AUTH_LOGIN } from '../../actions/auth'

const initState = {
  login: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        login: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer