import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet,Alert,Image,ImageBackground,Button, } from 'react-native'
import { Container,Right, Icon} from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'
import {useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {GIFT_IMG} from '../../constants/gift'

const NUN_COLUMNS = 2

const Coupon1 = () =>{
  const userInfo = useSelector(state=>state.authReducer.userInfo)
  const renderGift = ({item}) => {
    if (typeof item !== 'object') return (
      <View style={[styles.flatlistItem, { height: 100 }]}>
          <View style={styles.itemButton}>
            <Text>無任何COUPON</Text>
          </View>
        </View>
    )
      return (
        <View style={styles.flatlistItem}>
          <TouchableOpacity style={styles.itemButton} onPress={() => {Alert.alert(item.name,"確定使用")}}>
            <Text>{item.uri}</Text>
            <Image  resizeMode={"stretch"} style={styles.center} source={GIFT_IMG[item.uri]}/>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.myButton_circle}>
              <Text>使用</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
  }

  return(
    <Container>
      <Header>
        <Icon name="arrow-forward" />
      </Header>
      <View style={{flex : 6, flexDirection:'row'}}>
        <FlatList
          numColumns={NUN_COLUMNS}
          data = {!!userInfo.cupon && userInfo.cupon}
          renderItem = {renderGift}
        />
      </View>
    </Container>
  )
}


const styles = StyleSheet.create({

    container: {
      backgroundColor:Colors.secondary,
      flex: 1,
    },
    flatlistItem: {
        flex:1,
        height: 220,
        padding:0,
        margin:8,
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        overflow:'hidden'
    },
    topLiftItem:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    topRightItem:{
        flex:2 ,
        // backgroundColor:'skyblue',
         justifyContent: 'center',
         alignItems: 'center'
    },
    title: {
      fontSize: 18,
    },
    Content:{
      backgroundColor:'#3d4d5e',
     fontSize:15,
     margin:3,
     color:'#ffff',

    },
      myButton_circle:{
        justifyContent:'center',
        alignItems:'center',
        padding: 1,
        height: 30,
        width: 50,  //The Width must be the same as the height
        borderRadius:10, //Then Make the Border Radius twice the size of width or Height
        backgroundColor:'rgb(215, 195, 217)',
        marginBottom:2

      },
      itemButton: {
        flex: 1,
        // height: 500,
        // width: 175,
        // margin: 4,
        // borderRadius: 12,
        borderColor: '#ccc',
        borderWidth: 0,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    center: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width:200,
        height:300,
        backgroundColor:'transparent'
    },
    modalView: {
        margin: 0,
        justifyContent: 'flex-end'
      },



  });

export default Coupon1