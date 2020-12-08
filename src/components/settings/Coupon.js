import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet,Alert,Image,ImageBackground,Button, } from 'react-native'
import { Container,Right} from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

const GiftOption = [
    {name:'pick',costpoint:'5'},
    {name:'Elixir 包膜弦',costpoint:'50'},
    {name:'全館商品9折卷一張',costpoint:'20'},
    {name:'小練團室1h使用卷',costpoint:'60'},
    {name:'小練團室1h使用卷',costpoint:'60'},
    {name:'小練團室1h使用卷',costpoint:'60'},
]
const NUN_COLUMNS = 2

const renderGift = (data) =>(
    <View style={styles.flatlistItem}>

    <TouchableOpacity style={styles.itemButton} onPress={() => {Alert.alert(data.item.name,"確定使用")}}>
    <Image  resizeMode={"stretch"} style={styles.center} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-MO4DLBBz-qCWVf2A0k-QPzKCcHvBwmoUzampZf6hOjQwq0rEsC3cfK8w8cvXJffTDAz1KM&usqp=CAc' }}/>

        <Text style={styles.title}>{data.item.name}</Text>
        <Text style={styles.Content}> 需要點數：{data.item.costpoint}</Text>
          
          <View style={styles.myButton_circle}>
            <Text>使用</Text>
         
    </View>

    
    </TouchableOpacity>
    
    </View>
)

function Coupon (props){
    return(
        <Container>
        <Header/>
        <View style={{flex : 6, flexDirection:'row'}}>
        <FlatList
            numColumns={NUN_COLUMNS}
            data = {GiftOption}
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
        borderWidth: 3,
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
        height: 50,
        width: 50,  //The Width must be the same as the height
        borderRadius:100, //Then Make the Border Radius twice the size of width or Height   
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

export default Coupon