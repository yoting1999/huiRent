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
      return res.data
    }catch(err) {
      console.log('err', err)
    }
  }

  const finishTheReserve = async(id) => {
    setIsLoading(false)
    try {
      await Reserve.changeReserve(id, { status: 'DONE' })
      setIsLoading(true)
    }catch(err) {
      console.log('err', err)
    }
  }

  // id外面那層 ; ordererId:裡面那層
  const addPoint = async(id, ordererId, gotPointData) => {
    setIsLoading(false)
    try {
      const res = await People.changePeople(id, ordererId, { GotPoint: [...gotPointData] })
      setIsLoading(true)
      return res.status
    }catch(err) {
      console.log('err', err)
    }
  }

  return (
    <Layout
      addPoint={addPoint}
      getReserve={getReserve}
      getOrderer={getOrderer}
      isLoading={isLoading}
      finishTheReserve={finishTheReserve}
    />
  )
}

export default Scanner