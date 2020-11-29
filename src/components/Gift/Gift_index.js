import React,{useEffect,useState} from 'react'
import {View,Text,FlatList} from 'react-native'
import { Container, Content, Thumbnail, Button, Icon } from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'

const GiftPoint = [{TotalPoint:100,LeftPoint:50}]
const GiftOption = [
    {name:'pick',costpoint:'5'},
    {name:'Elixir 包膜弦',costpoint:'50'},
    {name:'全館商品9折卷一張',costpoint:'20'},
    {name:'小練團室1h使用卷',costpoint:'60'}
]

const renderPoint = (data) =>(
<View>
    <Text style={{}}>目前可用點數:{data.item.LeftPoint}</Text>
</View>
);

const renderGift = (data) =>(
    <View>
        <Text>需要點數：{data.item.costpoint},商品：{data.item.name}</Text>
    </View>
)



function Gift_index() {


return(
<Container>
    <Header title="點數兌換"/>

<View style={{ flex: 1, justifyContent: 'center'}}>
    <View style={{ flex : 1 ,flexDirection:'row'}}>
        <View style={{flex :1,backgroundColor:'red'}}>
            <Text>這裡放圖</Text>
            <View style={{flex:1,justifyContent:'flex-end',}}>
                <Text style={{fontSize:20}}>點我開始抽獎</Text>
            </View>
        </View>
        <View style={{flex:2 ,backgroundColor:'blue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>可用點數</Text>
            {/* <View style={{height:'50%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'skyblue'}}>
                <FlatList
                data={GiftPoint}
                renderItem={renderPoint}
                ></FlatList>
            </View> */}

        </View>
    </View>
    <View style={{flex : 2,backgroundColor:'skyblue'}}>
        <FlatList
        data = {GiftOption}
        renderItem = {renderGift}
        ></FlatList>
    </View>


 </View>

</Container>


)

}export default Gift_index;
