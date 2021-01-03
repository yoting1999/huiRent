import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import * as firebase from 'firebase'
import agent from '../../lib/agent'

import { setAuthInfo } from '../../store/actions/auth'
import {Alert} from 'react-native'
export const circle1 = () => {
    const { People} = agent
    const userInfo = useSelector(state=>state.authReducer.userInfo)

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    Alert.alert()
    try{
        // gotpointdata = {points:point,time:time,type:'lottery'}
        Alert.alert()

    }catch(err){
        console.log(err)
    }
}
