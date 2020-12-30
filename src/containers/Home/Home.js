import React, { useEffect, useState } from 'react'
import Layout from '../../components/Home/Home1'
import { useSelector, useDispatch } from 'react-redux'
import * as firebase from 'firebase'
import agent from '../../lib/agent'
import { setAuthInfo } from '../../store/actions/auth'

function Home() {

  const { People } = agent

  const userInfo = useSelector(state=>state.authReducer.userInfo)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const getUser =async() => {
    setIsLoading(true)
    const uid = firebase.auth().currentUser.uid
    try {
      const res = await People.getPeople(uid)
      const tempUserData = {...Object.values(res.data)[0],ordererid: Object.keys(res.data)[0]}
      setUserData(tempUserData)
      setIsLoading(false)
    } catch(err) {
      console.log('err', err)
    }
  }

  useEffect(()=>{
    getUser()
  }, [])

  useEffect(()=>{
    if(!userData) return
    dispatch(setAuthInfo(userData))
  }, [userData])

  return <Layout isLoading={isLoading} userInfo={userInfo}/>
}

export default Home