import React, { useState, useEffect } from 'react'
import { Text ,View} from 'react-native'
import { Container, Content,Button } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'
import Header from '../UI/Header'
import Swiptlist from '../UI/SwipeList';
import SwipeListManager from '../UI/SwipeListManager';

import { isManager } from '../../lib/auth'


function MyReserve(props) {

    const { reserveData, isLoading, getReservesWithDate, userInfo, deleteReserve, getReserves } = props

    const [data, setData] = useState(null)

    const [status, setStatus] = useState('UNDONE')

    useEffect(()=>{
      if(!reserveData) return
      console.log('reserveData', reserveData)
      const tempData = reserveData && reserveData.filter((item)=>item.status === status )
      setData(tempData)
    }, [reserveData])

    useEffect(()=>{
      if(!status) return
      const tempData = reserveData && reserveData.filter((item)=>item.status === status )
      setData(tempData)
    },[status])

    return (
      <Container>
        <Header title="我的預約" isRefresh action={getReserves}/>
        <View style={{flexDirection:'row',margin:20,alignSelf:'center'}}>
        <Button info rounded style={{padding:20}} onPress={()=>setStatus('UNDONE') } disabled={status==='UNDONE'}><Text>未完成</Text></Button>
        <View style={{paddingLeft:30}}></View>
        <Button info rounded style={{padding:20}}onPress={()=>setStatus('DONE')}disabled={status==='DONE'}><Text>已完成</Text></Button>
        </View>

          <ScrollView>

            {isManager(userInfo) ?
             <SwipeListManager getReservesWithDate={getReservesWithDate} reserveData={ data && data.sort((a, b)=>new Date(a.date) - new Date(b.date))} />
             :

             <Swiptlist reserveData={ data && data.sort((a, b)=>new Date(a.date) - new Date(b.date))} deleteReserve={deleteReserve} />

             }
          </ScrollView>
        <Spinner visible={isLoading}/>
      </Container>

    )
  }

  export default MyReserve