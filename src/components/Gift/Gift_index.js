import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet,Alert,Image,ImageBackground } from 'react-native'
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
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png'


const renderGift = (data) =>(
    <View style={styles.item}>

    <TouchableOpacity style={styles.itemButton}>
    <ImageBackground  resizeMode={"repeat"} style={styles.center} source={{ uri: 'http://lorempixel.com/1920/1920/cats' }}>

        <Text style={styles.title}>商品：{data.item.name}</Text>
        <Text style={styles.Content}> 需要點數：{data.item.costpoint}</Text>
          
          <View style={styles.myButton_circle}>
            <Text>兌換</Text>
         
    </View>
    </ImageBackground>
    
    </TouchableOpacity>
    
    </View>
)



function Gift_index() {


return(
<Container>
    <Header title="點數兌換"/>
    

<View style={{ flex: 1, justifyContent: 'center'}}>
    <View style={{ flex : 1 ,flexDirection:'row'}}>
        <View style={{flex :3,backgroundColor:'orange'}}>
        <Image  resizeMode={"repeat"} style={[styles.center]} source={{ uri: 'http://lorempixel.com/output/cats-q-c-640-480-9.jpg' }}/>

            <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={{fontSize:20}}>點我開始抽獎</Text>
            </View>
        </View>
        <View style={{flex:2 ,backgroundColor:'darkblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>可用點數</Text>
            {/* <View style={{height:'50%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'skyblue'}}>
                <FlatList
                data={GiftPoint}
                renderItem={renderPoint}
                ></FlatList>
            </View> */}

        </View>
    </View>
    <View style={{flex : 4, flexDirection:'row'}}>
        <FlatList
            numColumns={NUN_COLUMNS}
            data = {GiftOption}
            renderItem = {renderGift}
        />
    </View>
 </View>
</Container>


)

}
const styles = StyleSheet.create({

    container: {
      //backgroundColor: '#00bfff',
      flex: 1,
    },  
    item: { 
        flex:1, 
        height: 200,
        padding:0,
        margin:4, 
        borderRadius: 12, 
        borderColor: '#ccc', 
        borderWidth: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        overflow:'hidden'
    },
    title: {
      fontSize: 15,
    },
    Content:{
      backgroundColor:'red',
     textDecorationLine:'underline',
     fontSize:12
    },
      myButton_circle:{
        justifyContent:'center',
        alignItems:'center',
        padding: 1,
        height: 50,
        width: 50,  //The Width must be the same as the height
        borderRadius:100, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor:'rgb(195, 125, 198)',
     
      },
      itemButton: { 
        flex: 1, 
        // height: 500,
        // width: 175,
        // margin: 4, 
        // borderRadius: 12, 
        borderColor: '#ccc', 
        borderWidth: 0,
        justifyContent:'flex-end',
        alignItems:'flex-end', 
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
        
        
        

  });
  
  export default Gift_index;
