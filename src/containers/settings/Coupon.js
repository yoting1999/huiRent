import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/settings/Coupon';
import agent from '../../lib/agent'


function Coupon() {
    const { People } = agent
    const userInfo = useSelector(state => state.authReducer.userInfo)
    
    const changeState = async()=>{
        try{
            // const coupon = userInfo.coupon
            // const temp = [...coupon]
            // temp[0].status = 'DONE'
            // const res = await People.changePeople(userInfo.uid,userInfo.orderid,{cupon:temp})
        }catch(error){
            console.log('err',error)
        }
    }
    
    return <Layout changeState={changeState}/>
}

export default Coupon