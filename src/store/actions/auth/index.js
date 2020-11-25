import React from 'react'

export const AUTH_LOGIN = 'AUTH_LOGIN'

export const authLogin = () => {
  return {
    type: AUTH_LOGIN,
    payload: true
  }
}