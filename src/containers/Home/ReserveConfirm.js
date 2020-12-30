import React, { useState, useEffect } from 'react'
import Layout from '../../components/Home/ReserveConfirm'

import agent from '../../lib/agent'

function ReserveConfirm(props) {
  const { navigation } = props
  const { reserveData, userInfo } = props.route.params
  const { Reserve } = agent
  const addReserve = async() => {
    try {
      const userId = userInfo.uid
      await Reserve.addReserve({
       ...reserveData,
        userId
      })
    }catch(err) {
      console.log('err', err)
    }
  }

  const changeReserve = async(id) => {
    try{
      await Reserve.changeReserve(id,{})
    }catch(err){
      console.log('change reserve err',err)
    }
  }



  return <Layout addReserve={addReserve} reserveData={reserveData} navigation={navigation } userInfo={userInfo}/>
}

export default ReserveConfirm