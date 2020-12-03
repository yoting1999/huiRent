import React from 'react'

export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const authLogin = () => {
  return {
    type: AUTH_LOGIN,
    payload: true
  }
}

export const authLogout = () => {
  return {
    type: AUTH_LOGIN,
    payload: false
  }
}