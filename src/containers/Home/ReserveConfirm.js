import React, { useState, useEffect } from 'react'
import Layout from '../../components/Home/ReserveConfirm'

import agent from '../../lib/agent'
// import useSelector from 'react-redux'
function ReserveConfirm(props) {
  // const userInfo = useSelector(state=>state.authReducer.userInfo)

  const { reserveData, userInfo } = props.route.params
  const { Reserve } = agent
  const addReserve = async() => {
    try {
      const userId = userInfo.uid
      const res = await Reserve.addReserve({
       ...reserveData,
        userId
      })
    }catch(err) {
      console.log('err', err)
    }
  }



  return <Layout addReserve={addReserve} reserveData={reserveData} userInfo={userInfo}/>
}

export default ReserveConfirm