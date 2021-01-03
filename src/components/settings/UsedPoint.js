import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Header from '../UI/Header'
import UsedList from './UsedPointlist'
import {useSelector } from 'react-redux'

function used(props) {
  const userInfo = useSelector(state=>state.authReducer.userInfo)

  const countPoints = () => {
    if(typeof userInfo.UsedPoint === 'string') return 0
    return userInfo.UsedPoint.map(item=>item.costpoint).reduce((a, b)=> a + b)
  }

    return (
      <Container>
        <Header/>
         <View style={styles.card}>
           <Text style={styles.title}>已使用點數</Text>
           <Text style={styles.in}>{ countPoints() }</Text>
         </View>
          <View style={{flex:1}}>
            <UsedList/>
         </View>
      </Container>
    )
  }
  const styles=StyleSheet.create({
    card: {
      backgroundColor:'#fff',
      margin: 16,
      borderRadius: 16,
      shadowColor: '#000000',
      borderWidth: 1,
      borderColor: '#eee',
      paddingVertical: 20,
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
        height: 2,
        width: 2,
      }
    },
    title:{
      textAlign:'center',
      fontSize:20,
      marginBottom:10,
      // padding:20,
    },
    in:{
      textAlign:'center',
      fontSize:60,
    }
  })

  export default used