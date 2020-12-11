import React, { useState } from 'react'
import Layout from '../../components/Home/Reserve'
import * as firebase from 'firebase';

function Reserve() {
  const users = firebase.auth().currentUser
  console.log('users', users)
  const addReserve = () => {
    try {

    }catch(err) {
      console.log('err', err)
    }
  }

  return <Layout addReserve={addReserve}/>
}

export default Reserve