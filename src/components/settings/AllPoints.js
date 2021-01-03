import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import {useSelector } from 'react-redux'

import Header from '../UI/Header'
import AllList from '../settings/AllPointlist'

  function all(props) {
    const userInfo = useSelector(state=>state.authReducer.userInfo)

    const countPoints = () => {
      if(typeof userInfo.GotPoint === 'string') return 0
      return userInfo.GotPoint.map(item=>item.points).reduce((a, b)=> a + b)
    }

      return (
        <Container>
          <Header/>
           <View style={styles.card}>
             <Text style={styles.title}>累積點數</Text>
             <Text style={styles.in}>{countPoints()}</Text>
           </View>
            <View style={{flex:1}}>
              <AllList/>
           </View>
        </Container>
      )
    }
    const styles=StyleSheet.create({
      title:{
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
        // padding:20,
      },
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
      in:{
        textAlign:'center',
        fontSize:60,
        // marginTop:30,
        // fontWeight:'bold',

      }
    })

  export default all