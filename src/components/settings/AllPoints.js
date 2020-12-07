import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import { Container, Content, Button, Icon,Separator, List } from 'native-base'
import Header from '../UI/Header'
import AllList from '../settings/AllPointlist'

function all(props) {
    return (
      <Container>
        <Header/>
         
            <View style={{backgroundColor:'#fff', margin: 16, borderRadius: 16, shadowColor: '#000000',borderWidth: 1,borderColor: '#eee',
            paddingVertical: 20,
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
        height: 2,
        width: 2,
      },}}>
        
              <Text style={styles.title}>已累積點數</Text>
              <Text style={styles.in}>400</Text>
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
    in:{
      textAlign:'center',
      fontSize:60,
      // marginTop:30,
      // fontWeight:'bold',
     
    }
  })
  export default all