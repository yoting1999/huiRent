import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/settings/Coupon';
import agent from '../../lib/agent'
import { setAuthInfo } from '../../store/actions/auth';


function Coupon() {
    const { People } = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const changeState = async (cid)=>{
        setIsLoading(true)
        try{
            const uid = userInfo.uid
            const ordererid = userInfo.ordererid
            const coupon = userInfo.cupon

            const index = coupon.findIndex((item)=>item.cid === cid)
            const temp = [...coupon]
            temp[index].status = 'DONE'
            const res = await People.changePeople(uid, ordererid, {cupon: temp})
            if(res.status === 200) dispatch(setAuthInfo())
            setIsLoading(false)
        }catch(error){
            console.log('err',error)
        }
    }

    return <Layout changeState={changeState} isLoading={isLoading}/>
}

export default Coupon