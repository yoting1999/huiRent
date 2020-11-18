import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight,FlatList ,Platform} from 'react-native'
import {  List, ListItem, Left, Body, Right,Container, Content, Button, Icon,Image,Separator } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import Header from '../UI/Header'
import Swipeout from 'react-native-swipeout';
import routeConfig from '../../constants/route'
import Swipeable from 'react-native-swipeable';
import { color } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'



function MyReserve(props) {
    const navigation = useNavigation()
    var swipeoutBtns = [
      {
        text: '取消預約',
        backgroundColor:'red'
      }
    ]


    return (
      <Container>
        <Header title="我的預約"/>
        <Content >
          <ScrollView>
        <View>
          <View style={{ padding: 10, borderBottomColor: '#000', borderBottomWidth: 1}}>
          <Swipeout right={swipeoutBtns} style={{height:60,width:350,backgroundColor:'#fff'}}>
             <Text style={{fontSize:20,fontWeight:'bold',marginBottom:5}}>2020/10/30</Text>
                <Text note>大練團室</Text>
                <Text>
                <Text note>租借時間：10:00</Text>
                <Text note>結束時間：13:00</Text>
                </Text>
             </Swipeout>
             </View>
             <Swipeout right={swipeoutBtns} style={{backgroundColor:'#fff', marginVertical: 50, padding: 10}}>
             <Text style={{fontSize:20,fontWeight:'bold',marginBottom:5}}>2020/10/30</Text>
                <Text note>大練團室</Text>
                <Text>
                <Text note>租借時間：10:00</Text>
                <Text note>結束時間：13:00</Text>
                </Text>
             </Swipeout>


             <Swipeout right={swipeoutBtns} style={{height:60,width:350,backgroundColor:'#fff'}}>
             <Text style={{fontSize:20,fontWeight:'bold',marginBottom:5}}>2020/10/30</Text>
                <Text note>大練團室</Text>
                <Text>
                <Text note>租借時間：10:00</Text>
                <Text note>結束時間：13:00</Text>
                </Text>
             </Swipeout>

         </View>
         </ScrollView>

      </Content>
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