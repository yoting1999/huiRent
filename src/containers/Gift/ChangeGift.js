import React, { useEffect, useState } from 'react'
import Layout from '../../components/Gift/Gift_index'
import { useSelector, useDispatch } from 'react-redux'
import * as firebase from 'firebase'
import agent from '../../lib/agent'
function ChangeGift(props) {
    const {People } = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    console.log('userInfo', userInfo)
    const getUser = async () => {
        setIsLoading(true)
        const uid = firebase.auth().currentUser.uid
        try {
            const res = await People.getPeople(uid)
            setUserData(Object.values(res.data)[0])
            setIsLoading(false)
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        getUser()
    }, [])


    return <Layout isLoading={isLoading} userInfo={userInfo} />
}

export default Gift