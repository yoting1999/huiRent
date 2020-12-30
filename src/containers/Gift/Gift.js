import React, { useEffect, useState } from 'react'
import Layout from '../../components/Gift/Gift_index'
import { useSelector, useDispatch } from 'react-redux'
import * as firebase from 'firebase'
import agent from '../../lib/agent'
function Gift() {
    const { Rooms, People ,Coupon} = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)

    console.log('userInfo', userInfo)


    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [body,setbody] = useState([])
    const [Usedpoint,setUsedpoint] = useState([])
    const getUser = async () => {
        setIsLoading(true)
        const uid = firebase.auth().currentUser.uid
        try {
            const res = await People.getPeople(uid)
            setUserData(Object.values(res.data)[0])
            console.log('抓取firebase資料')
            setIsLoading(false)
        } catch (err) {
            console.log('err', err)
        }
    }
    const updateCoupon = async (data,usedpointdata) =>{
        setIsLoading(true)
        const uid = firebase.auth().currentUser.uid
        setbody(userData.cupon)
        setUsedpoint(userData.UsedPoint)
        try{
            console.log(userData.cupon)
            //還沒算到點數的部分
            Coupon.updateCoupon(uid,{'cupon':[...body,data],'UsedPoint':[...Usedpoint,usedpointdata]})
            setbody([...body,data])
            setUsedpoint([...Usedpoint,usedpointdata])
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
    },[body])


    return <Layout isLoading={isLoading} userInfo={userInfo} updateCoupon={updateCoupon} />
}

export default Gift