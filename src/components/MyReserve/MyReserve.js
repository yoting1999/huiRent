import React from 'react'
import { Text } from 'react-native'
import { Container, Content } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'
import Header from '../UI/Header'
import Swiptlist from '../UI/SwipeList';
import SwipeListManager from '../UI/SwipeListManager';

import { isManager } from '../../lib/auth'

function MyReserve(props) {
    const { reserveData, isLoading, getReservesWithDate, userInfo } = props
    return (
      <Container>
        <Header title="我的預約"/>
          <ScrollView>
            {isManager(userInfo) ?
             <SwipeListManager getReservesWithDate={getReservesWithDate} reserveData={ reserveData && reserveData.sort((a, b)=>new Date(a.date) - new Date(b.date))} />
             :
             <Swiptlist reserveData={ reserveData && reserveData.sort((a, b)=>new Date(a.date) - new Date(b.date))} />
             }
          </ScrollView>
        <Spinner visible={isLoading}/>
      </Container>

    )
  }

  export default MyReserve