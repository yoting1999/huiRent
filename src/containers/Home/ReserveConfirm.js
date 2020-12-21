import React, { useState, useEffect } from 'react'
import Layout from '../../components/Home/ReserveConfirm'

import agent from '../../lib/agent'

function ReserveConfirm(props) {
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



  return <Layout addReserve={addReserve} reserveData={reserveData}/>
}

export default ReserveConfirm