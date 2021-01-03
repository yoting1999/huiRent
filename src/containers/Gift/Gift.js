import React, { useEffect, useState } from 'react'
import Layout from '../../components/Gift/Gift_index'
import { useSelector, useDispatch } from 'react-redux'
import * as firebase from 'firebase'
import agent from '../../lib/agent'

import { setAuthInfo } from '../../store/actions/auth'

function Gift() {
    const { People,Coupon} = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)


    const changePeople = async(data) => {
        setIsLoading(false)
        try {
            const uid = userInfo.uid
            const ordererid = userInfo.ordererid
            const res = await People.changePeople(
                uid,
                ordererid,
                data
            )
           
            if(res.status === 200) {
                dispatch(setAuthInfo())
            }
            setIsLoading(false)
        }catch(err) {
            console.log('err', err)
        }
    }

    const updateCoupon = async (cuponData,usedpointdata,costpoint) =>{
        setIsLoading(true)
        try{
            //還沒算到點數的部分
            const uid = userInfo.uid
            const ordererid = userInfo.ordererid
            let point = userInfo.AllPoint - costpoint
            let cupon = userInfo.cupon
            let UsedPoint_data = userInfo.UsedPoint
    
    
            let tempCuponData 
            let tempUsedPointData
            if ((Array.isArray(cupon))){
                tempCuponData = [...cupon, cuponData]
            }else {
                tempCuponData = [cuponData]
            }
    
            if ((Array.isArray(UsedPoint_data))){
                tempUsedPointData = [...UsedPoint_data, usedpointdata]
            }else {
                tempUsedPointData = [usedpointdata]
            }

            const res = await People.changePeople(
                uid,
                ordererid,
                {cupon: tempCuponData, UsedPoint: tempUsedPointData, AllPoint: point}
            )
           
            if(res.status === 200) {
                dispatch(setAuthInfo())
            }
            setIsLoading(false)
        }
        catch(err){
            console.log('err',err)
        }
    }


    return <Layout isLoading={isLoading} changePeople={changePeople} userInfo={userInfo} updateCoupon={updateCoupon} />
}

export default Gift