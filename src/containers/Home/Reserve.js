import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Layout from '../../components/Home/Reserve'
import agent from '../../lib/agent'
import dayjs from 'dayjs'
const TODAY = dayjs().format('YYYY-MM-DD')

function Reserve() {
  const { Reserve } = agent

  const userInfo = useSelector(state=>state.authReducer.userInfo)
  const [reserveData, setReserveDate] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getReserves = async(dateTime = TODAY, room = 'BIG') => {
    setIsLoading(true)
    try {
      const res = await Reserve.getReserves()
      const data = Object.values(res.data).filter((item)=>item.date === dateTime && item.room === room)
      setReserveDate(data)
      setIsLoading(false)
    } catch(err){
      console.log('err', err)
    }
  }

  useEffect(()=>{
    getReserves()
  }, [])

  return <Layout userInfo={userInfo} getReserves={getReserves} reserveData={reserveData} isLoading={isLoading}/>
}

export default Reserve