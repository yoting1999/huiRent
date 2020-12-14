import React, { useState } from 'react'
import Layout from '../../components/QRcode/Scanner'
import agent from '../../lib/agent'
function Scanner() {
  const { Reserve, People } = agent

  const [isLoading, setIsLoading] = useState(false)

  const getReserve = async(id) => {
    setIsLoading(false)
    try {
      const res = await Reserve.getReserve(id)
      setIsLoading(true)
      return res.data
    }catch(err) {
      console.log('err', err)
    }
  }

  const getOrderer = async(uid) => {
    setIsLoading(false)
    try {
      const res = await People.getPeople(uid)
      setIsLoading(true)
      return Object.values(res.data)[0]
    }catch(err) {
      console.log('err', err)
    }
  }

  return (
    <Layout getReserve={getReserve} getOrderer={getOrderer} isLoading={isLoading}/>
  )
}

export default Scanner