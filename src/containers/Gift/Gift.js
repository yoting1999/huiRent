import React, { useEffect, useState } from 'react'
import Layout from '../../components/Gift/Gift_index'
import { useSelector, useDispatch } from 'react-redux'
import * as firebase from 'firebase'
import agent from '../../lib/agent'
function Gift() {
    const { Rooms, People ,Coupon} = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
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
    const updateCoupon = async (data) =>{
        setIsLoading(true)
        const uid = firebase.auth().currentUser.uid
        const body = userData.cupon
        try{
            console.log(userData.cupon)
            // Coupon.addCoupon(uid,body)
            // Coupon.updateCoupon(uid,{'cupon':[...body,data],UsedPoint:30})
            body = [...body,{data}]
            // const res = await People.getPeople(uid)
            // console.log(Object.values(res.data)[1])
            setIsLoading(false)
            console.log('wow')
        }
        catch(err){
            console.log('err',err)
        }  
    }

    useEffect(() => {
        getUser()
    }, [])


    return <Layout isLoading={isLoading} userInfo={userInfo} updateCoupon={updateCoupon} />
}

export default Gift