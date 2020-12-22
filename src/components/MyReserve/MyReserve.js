import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight,FlatList ,Platform} from 'react-native'
import {  List, ListItem, Left, Body, Right,Container, Content, Button, Icon,Image,Separator } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import Header from '../UI/Header'
import Swipeout from 'react-native-swipeout';
import routeConfig from '../../constants/route'
import Swiptlist from '../UI/SwipeList';
import { color } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'


function MyReserve(props) {
    const navigation = useNavigation()
    const { reserveData, isLoading } = props

    return (
      <Container>
        <Header title="我的預約"/>
        <Content >
          <ScrollView>
            <Swiptlist reserveData={reserveData && reserveData.sort((a,b)=> new Date(b.date) - new Date(a.date))}/>
          </ScrollView>
        </Content>
      <Spinner visible={isLoading}/>
      </Container>

    )
  }

  const styles = StyleSheet.create({

    image: {
      height: 150,
      marginHorizontal: 16,
      marginVertical: 8,
      resizeMode: "cover",
      justifyContent: "center",
      position: 'relative',
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 1,
      shadowOffset: {
        height: 2,
        width: 1,
      },
    },
    filter: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,.6)',
      borderRadius: 6
    },

    reserve:{
        fontSize: 50,
        fontWeight:'bold',
        color:'#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,


    }
  })

  export default MyReserve