import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import { Container, Content, Button, Icon,Separator } from 'native-base'
import Header from '../UI/Header'
import UsedList from '../settings/UsedPointlist'
import { useNavigation} from '@react-navigation/native';
import {useSelector } from 'react-redux'
//header arrow -> <Icon style={{ fontSize: 18 }}type="FontAwesome5" name="arrow-left" />
function used(props) {
  const userInfo = useSelector(state=>state.authReducer.userInfo)

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
     
           <Text style={styles.title}>可使用點數</Text>
           <Text style={styles.in}>{userInfo && userInfo.UsedPoint}</Text>
         </View>
     
         
          <View style={{flex:1}}>
         
         <UsedList/>
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
  
  export default used