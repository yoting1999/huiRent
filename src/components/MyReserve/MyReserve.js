import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight,FlatList ,Platform} from 'react-native'
import {  List, ListItem, Left, Button, Right,Container, Content, Icon,Image,Separator } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import Header from '../UI/Header'
import Swipeout from 'react-native-swipeout';
import routeConfig from '../../constants/route'
import Swiptlist from '../UI/SwipeList';
import { color } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'


function MyReserve(props) {
    const { reserveData, isLoading } = props
    return (
      <Container>
        <Header title="我的預約"/>
        <Content >
          {
            reserveData && reserveData.length === 0 ?
            <Text>無預約資料</Text>
            :(
            <ScrollView>
              <Swiptlist reserveData={ reserveData && reserveData.sort((a, b)=>new Date(a.date) - new Date(b.date))} />
            </ScrollView>

            )
          }

        </Content>
        <Spinner visible={isLoading}/>
      </Container>

    )
  }

  export default MyReserve