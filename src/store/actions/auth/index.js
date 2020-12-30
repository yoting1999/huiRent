import React from 'react'
import * as firebase from 'firebase'

import agent from '../../../lib/agent'

export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const SET_AUTH_INFO = 'SET_AUTH_INFO'

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


export const setAuthInfo = () => {
  return async dispatch => {
  const uid = firebase.auth().currentUser.uid
  try {
    const { People } = agent
    const res = await People.getPeople(uid)
    const userData = {...Object.values(res.data)[0],ordererid: Object.keys(res.data)[0]}

    dispatch({
      type: SET_AUTH_INFO,
      payload: {
        date: userData.date,
        email: userData.email,
        name: userData.name,
        uid: userData.uid,
        ordererid: userData.ordererid,
        position: userData.position,
        GotPoint: userData.GotPoint,
        UsedPoint: userData.UsedPoint,
        cupon: userData.cupon,
        photo:userData.photo
      }
    })
  } catch(err) {
    console.log('err', err)
    }
  }
}