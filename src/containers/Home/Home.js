import React, { useEffect, useState } from 'react'
import Layout from '../../components/Home/Home1'
import { useSelector, useDispatch } from 'react-redux'
import * as firebase from 'firebase'
import agent from '../../lib/agent'
import { setAuthInfo } from '../../store/actions/auth'

function Home() {

  const { Rooms, People } = agent

  const userInfo = useSelector(state=>state.authReducer.userInfo)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  console.log('home userInfo', userInfo)
  const getUser =async() => {
    setIsLoading(true)
    const uid = firebase.auth().currentUser.uid
    try {
      const res = await People.getPeople(uid)
      console.log('home res', Object.values(res.data)[0])
      setUserData(Object.values(res.data)[0])
      setIsLoading(false)
    } catch(err) {
      console.log('err', err)
    }
  }
  // const getRooms = async() => {
  //   try {
  //     const res = await Rooms.getRooms()
  //     console.log('res', res.data)
  //   } catch(err) {
  //     console.log('err', err)
  //   }
  // }

  useEffect(()=>{
    // getRooms()
    getUser()
  }, [])

  useEffect(()=>{
    if(!userData) return
    dispatch(setAuthInfo(userData))
  }, [userData])

  return <Layout isLoading={isLoading} userInfo={userInfo}/>
}

export default Home