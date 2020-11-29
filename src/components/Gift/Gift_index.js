import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'
import { Container, Content, Thumbnail, Button, Icon } from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'

const GiftOption = [
    {name:'pick',costpoint:'5'},
    {name:'Elixir 包膜弦',costpoint:'50'},
    {name:'全館商品9折卷一張',costpoint:'20'},
    {name:'小練團室1h使用卷',costpoint:'60'},
    {name:'小練團室1h使用卷',costpoint:'60'},
    {name:'小練團室1h使用卷',costpoint:'60'},
]

const NUN_COLUMNS = 2

const renderPoint = (data) => (
    <View>
        <Text style={{}}>目前可用點數:{data.item.LeftPoint}</Text>
    </View>
);

const renderGift = (data) =>(
    <View style={styles.item}>
        <Text style={styles.title}>商品：{data.item.name}</Text>
        <Text style={styles.Content}>需要點數：{data.item.costpoint}</Text>
    </View>
)



function Gift_index() {


return(
<Container>
    <Header title="點數兌換"/>

<View style={{ flex: 1, justifyContent: 'center'}}>
    <View style={{ flex : 1 ,flexDirection:'row'}}>
        <View style={{flex :1,backgroundColor:'orange'}}>
            <Text>這裡放圖</Text>
            <View style={{flex:1,justifyContent:'flex-end',}}>
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
    <View style={{flex : 2, flexDirection:'row'}}>
    {/* <View style={{flex:10}}>
        <Text >123</Text>
        <Text >需要點數</Text>
    </View> */}
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
        flex: 1, 
        height: 200,
        padding: 8,
        margin: 4, 
        borderRadius: 12, 
        borderColor: '#ccc', 
        borderWidth: 1, 
    },
    title: {
      fontSize: 15,
    },
    Content:{
     textAlign:'right',
     backgroundColor:'red',
     textDecorationLine:'underline',
     fontSize:12
    }
  });
  
  export default Gift_index;
