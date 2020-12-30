import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Layout from '../../components/Home/Reserve'
import agent from '../../lib/agent'
import dayjs from 'dayjs'
const TODAY = dayjs().format('YYYY-MM-DD')

function Reserve(props) {
  const [type, setType] = useState(false)
  const [reviseData, setReviseData] = useState(null)
  const { Reserve } = agent

  useEffect(()=>{
    if(!props.route.params) return
    if(props.route.params.type) {
      setType(props.route.params.type)
    }
    if(props.route.params.data) {
      setReviseData(props.route.params.data)
    }
  }, [props.route.params])



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

  return (
    <Layout
      type={type}
      userInfo={userInfo}
      getReserves={getReserves}
      reserveData={reserveData}
      isLoading={isLoading}
      reviseData={reviseData}
    />
  )
}

export default Reserve