import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Image, ImageBackground, Button, } from 'react-native'
import { Container, Right } from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LotteryModal from './LotteryModal';
import GiftModal from './GiftModal';
// import console = require('console');

const GiftOption = [
    { name: 'pick', costpoint: '5',uri:require('../../../assets/Gift_pick.jpg') },
    { name: 'Elixir 包膜弦', costpoint: '50',uri:require('../../../assets/Gift_elixir.jpg' )},
    { name: '全館商品9折卷一張', costpoint: '20' ,uri:require('../../../assets/Gift_coupon1.jpg')},
    { name: '小練團室1h使用卷', costpoint: '60',uri:require('../../../assets/Gift_coupon2.jpg') }
]

const NUN_COLUMNS = 2



// const renderGift = (data) =>(
//     <View style={styles.flatlistItem}>

//     <TouchableOpacity style={styles.itemButton} onPress={() => {Alert.alert(data.item.name,"先不要點拜託")}}>
//     <Image  resizeMode={"stretch"} style={styles.center} source={{ uri: 'http://lorempixel.com/1920/1920/cats' }}/>

//         <Text style={styles.title}>{data.item.name}</Text>
//         <Text style={styles.Content}> 需要點數：{data.item.costpoint}</Text>

//           <View style={styles.myButton_circle}>
//             <Text>兌換</Text>

//     </View>


//     </TouchableOpacity>

//     </View>
// )

function GiftModalchange(data){
    setGiftModalVisible(true)
    

}


function Gift_index(props) {
    const { isLoading, userInfo } = props
    const [modalVisible, setModalVisible] = useState(false)
    const [GiftModalVisible, setGiftModalVisible] = useState(false)
    console.log('使用點數',userInfo.UsedPoint)
    console.log('總共點數',userInfo.GotPoint)
    const renderGift = (data) => (  

    
       
    <View style={styles.flatlistItem}>
            
        <TouchableOpacity style={styles.itemButton} onPress={() => setGiftModalVisible(true)}>
        <View style={{flex:4}}>
            <ImageBackground resizeMode={'center'} style={styles.center} source={data.item.uri }>
            </ImageBackground>
        </View>
        <View style={styles.flatlistBox}>
            <Text style={styles.title}>{data.item.name}</Text>
            
        </View>
        <View style={styles.flatlistBox}>
        <Text style={styles.Content}> 需要點數：{data.item.costpoint}</Text>
        </View>
        </TouchableOpacity>

    </View>
    
)

    return (
        
        <Container style={styles.container}>
            <Header title="點數兌換" />
           

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.topLiftItem} onPress={() => setModalVisible(true)} >
                        <Image resizeMode={"contain"} style={[styles.center]} source={require('../../../assets/Gift_circle.jpg')} />
                        <TouchableOpacity>
                            <Text style={styles.Content}>點圖進入幸運輪盤頁面</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={styles.topRightItem}>
                        <Text style={styles.Content}>目前可用點數：{userInfo.GotPoint-userInfo.UsedPoint}</Text>
                        <LotteryModal
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}></LotteryModal>
                                    <GiftModal
        GiftModalVisible={GiftModalVisible}
        setGiftModalVisible={setGiftModalVisible}
        ></GiftModal>
                    </View>
                </View>
                <View style={{ flex: 6, flexDirection: 'row' }}>
                    <FlatList
                        numColumns={NUN_COLUMNS}
                        data={GiftOption}
                        renderItem={renderGift}
                    />
                </View>
            </View>
        </Container>


    )

}

const styles = StyleSheet.create({

    container: {
        //   backgroundColor:Colors.secondary,
        flex: 1,
    },
    flatlistItem: {
        flex: 1,
        height: 300,
        padding: 0,
        margin: 4,
        // backgroundColor: 'red',
        borderRadius: 12,
        // borderColor: '#ccc', 
        // borderWidth: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'visible',
        },
    flatlistBox:{
        flex:1,
        overflow:'hidden',
        alignItems:'center',
        padding:10  ,
        // backgroundColor:'red'
    },
    topLiftItem: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topRightItem: {
        flex: 2,
        // backgroundColor:'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
    },
    Content: {
        // backgroundColor: 'red',
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight:'bold'
    },
    myButton_circle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        height: 50,
        width: 50,  //The Width must be the same as the height
        borderRadius: 100, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: 'rgb(195, 125, 198)',

    },
    itemButton: {
        flex: 1,
        // height: 500,
        // width: 175,
        // margin: 4, 
        // borderRadius: 12, 
        borderColor: '#ccc',
        borderWidth: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        // overflow: 'hidden'
    },
    center: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 200,
        // height: 200,
        backgroundColor: 'transparent'
    },
    modalView: {
        margin: 0,
        justifyContent: 'flex-end'
    },



});

export default Gift_index;
