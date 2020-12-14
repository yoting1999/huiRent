import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/MyReserve/MyReserve'
import agent from '../../lib/agent'

function MyReserve() {
  const { Reserve } = agent
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

  useEffect(()=>{
    getReserves()
  }, [])

  return <Layout reserveData={reserveData} isLoading={isLoading}/>
}

export default MyReserve