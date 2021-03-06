import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet,Alert,Image,ImageBackground,Button, } from 'react-native'
import { Container,Right, Icon} from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'
import {useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {GIFT_IMG} from '../../constants/gift'

import Spinner from 'react-native-loading-spinner-overlay'

const NUN_COLUMNS = 2

const Coupon1 = (props) =>{
  const { changeState, isLoading } = props
  const [status, setStatus] = useState('UNDONE')
  const userInfo = useSelector(state=>state.authReducer.userInfo)

  const [data, setData] = useState(null)

  useEffect(()=>{
    if(!userInfo) return
    if(! Array.isArray(userInfo.cupon)) return
    const filterData = userInfo.cupon.filter(item=>item.status === status)
    setData(filterData)
  }, [status,userInfo])


  const renderDoneGift  = ({item, index}) => {
    if (typeof item !== 'object') return (
      <View style={[styles.flatlistItem, { height: 100 }]}>
          <View style={styles.itemButton}>
            <Text>無任何COUPON</Text>
          </View>
        </View>
    )
      return (
        <View style={styles.flatlistItem}>
          <View style={styles.itemButton}>
            <Image  resizeMode={"stretch"} style={styles.center} source={GIFT_IMG[item.uri]}/>
            <Text style={styles.title}>{item.name}</Text>
            <View style={[styles.myButton_circle, { backgroundColor: '#eee' }]}>
              <Text>已使用</Text>
            </View>
          </View>
        </View>
      )
  }

  const renderGift = ({item, index}) => {
    if (typeof item !== 'object') return (
      <View style={[styles.flatlistItem, { height: 100 }]}>
          <View style={styles.itemButton}>
            <Text>無任何COUPON</Text>
          </View>
        </View>
    )
      return (
        <View style={styles.flatlistItem}>
          <TouchableOpacity style={styles.itemButton} onPress={() => {
            Alert.alert(
                item.name,
                '確定使用？',
                [
                    { text: '確認', onPress: () => changeState(item.cid) },
                    { text: '取消', onPress: () => console.log('cancel')}
                ],
                { cancelable: false }
            )}}>

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
      <View style={{flexDirection:'row',margin:20,alignSelf:'center'}}>
        <Button  title='未兌換'  style={{padding:20}} onPress={()=>setStatus('UNDONE') } disabled={status==='UNDONE'}></Button>
        <View style={{paddingLeft:30}}></View>
        <Button title='已兌換' info rounded style={{padding:20}}onPress={()=>setStatus('DONE')}disabled={status==='DONE'}></Button>
        </View>
        {
          !!data && Array.isArray(data) && data.length === 0 ? (
            <Text style={{textAlign: 'center'}}>無任何COUPON</Text>
          ) : (
            <FlatList
              numColumns={NUN_COLUMNS}
              keyExtractor={(item, index) => index.toString()}
              data = {!!data && data}
              renderItem = {status === 'UNDONE' ? renderGift : renderDoneGift}
          />
          )
        }
        <Spinner visible={isLoading}/>
    </Container>
  )
}


const styles = StyleSheet.create({

    container: {
      backgroundColor:Colors.secondary,
      flex: 1,
    },
    flatlistItem: {
        flex:0.5,
        height: 230,
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
        width: 50,
        borderRadius: 10,
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
        width: 200,
        // height: 300,
        backgroundColor:'transparent'
    },
    modalView: {
        margin: 0,
        justifyContent: 'flex-end'
      },
  });

export default Coupon1