import React from 'react'
import { View, Text, StyleSheet,Alert } from 'react-native'
import { Container, Content, Button,Icon } from 'native-base'
import Header from '../UI/Header'
import { ALIANS, TIME } from '../../constants/rooms'
import Colors from '../../styles/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

function ReserveConfirm(props) {
  const navigation = useNavigation();
  const { addReserve, reserveData } = props
  const { isLoading, userInfo } = props
  const onpresstohome = async ()=>{
    await addReserve()
    Alert.alert(
      '預約成功！',
      '請至calendar查看預約',
      [
          { text: '確認', onPress: () => navigation.navigate('home') }
      ],
      
  )
    
  }
 
  const tagToTime = (tag) => {
    const time = TIME.find((item)=>item.tag === tag).time
    return time
  }
  return (
    <Container>
      <Header/>
      <Content>
      <Text style={styles.title}><Icon
            style={{ fontSize: 30 }}
            type="FontAwesome5" name="clipboard-list" />  ~確認預約~ </Text>
      <Text></Text><Text></Text><Text></Text>
     
        <View style={{borderWidth:30,
    borderColor:'#ffe4e1',paddingTop:10}}>
      <Text style={styles.room}> <Icon
            style={{ fontSize: 18 }}
            type="FontAwesome5" name="user" />   {userInfo && userInfo.name}</Text>
        <Text style={styles.room}>
          <Icon
            style={{ fontSize: 18 }}
            type="FontAwesome5" name="home" />   {ALIANS[reserveData.room]}</Text>
        
        <Text style={styles.room}><Icon
            style={{ fontSize: 18 }}
            type="FontAwesome5" name="calendar-check" />   {reserveData.date}</Text>

        {reserveData.time.map(t=><Text style={styles.room}><Icon
            style={{ fontSize: 18 }}
            type="FontAwesome5" name="clock" />   {tagToTime(t)}</Text>)}
       
       </View>
       <TouchableOpacity onPress={()=> onpresstohome()} style={styles.submitBtn}>
       <Text>確認</Text>
       </TouchableOpacity>
        
       
        </Content>
       
    </Container>
  )
}

const styles = StyleSheet.create({

  title:{
    fontSize:30,
    paddingLeft:100,
    paddingTop:30,
    
  },
  room:{
    fontSize:20,
    alignItems:"center",
    paddingLeft:100,
    padding:20,
    
    
  },
  submitBtn: {
    margin: 12,
    alignSelf: 'center',
    width: 100,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  }
})

export default ReserveConfirm