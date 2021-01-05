import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

import Layout from '../../components/MyReserve/MyReserve'
import agent from '../../lib/agent'

import { isManager } from '../../lib/auth'

const TODAY = dayjs().format('YYYY-MM-DD')

function MyReserve() {
  const { Reserve, People } = agent
  const userInfo = useSelector(state=>state.authReducer.userInfo)
  const [reserveData, setReserveDate ] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getReserves = async() => {
    setIsLoading(true)
    try {
      const res = await Reserve.getReserves()
      const tempData = []
      for (const [key, value] of Object.entries(res.data)) {
        tempData.push({
          qrCodeKey: key,
          ...value
        })
      }

      const data = tempData.filter(item=>item.userId === userInfo.uid)
      setReserveDate(data)
      setIsLoading(false)
    } catch(err){
      console.log('err', err)
    }
  }

  const getReservesWithDate = async(date = TODAY) => {
    setIsLoading(true)
    try {
      const res = await Reserve.getReserves()
      const tempData = []
      for (const [key, value] of Object.entries(res.data)) {
        tempData.push({
          qrCodeKey: key,
          ...value
        })
      }
      let data = tempData.filter(item=>item.date === date)

      setReserveDate(data)
      setIsLoading(false)
    } catch(err){
      console.log('err', err)
    }
  }

  const deleteReserve = async(id) => {
    setIsLoading(true)
    try{
      const res = await Reserve.deleteReserve(id)
      if(res.status === 200) await getReserves()
      setIsLoading(false)
    }catch(err){
      cnosole.log('delete err',err)
    }

  }

  const getOrderer = async(uid) => {
    setIsLoading(true)
    try {
      const res = await People.getPeople(uid)
      return res.data
    }catch(err) {
      console.log('err', err)
    }
  }

  const finishTheReserve = async(id) => {
    try {
      await Reserve.changeReserve(id, { status: 'DONE' })
    }catch(err) {
      console.log('err', err)
    }
  }

  const addPoint = async(id, ordererId, gotPointData, newCurPoints) => {
    try {
      const res = await People.changePeople(id, ordererId, { GotPoint: [...gotPointData], AllPoint: newCurPoints })
      return res.status
    }catch(err) {
      console.log('err', err)
    }
  }




  useEffect(()=>{
    if(isManager(userInfo)){
      getReservesWithDate()
    }else {
      getReserves()
    }
  }, [])

  return (
    <Layout
      userInfo={userInfo}
      getReserves={getReserves}
      getReservesWithDate={getReservesWithDate}
      reserveData={reserveData}
      isLoading={isLoading}
      deleteReserve={deleteReserve}

      getOrderer={getOrderer}
      finishTheReserve={finishTheReserve}
      addPoint={addPoint}
    />
  )
}

export default MyReserve