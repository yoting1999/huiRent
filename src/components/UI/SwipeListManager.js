import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Pressable,Platform, Alert } from 'react-native'
import { Button } from 'native-base'
import SwipeableFlatList from 'react-native-swipeable-list';
import dayjs from 'dayjs'
import { ALIANS, TIME, ROOMS } from '../../constants/rooms'
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

function SwipeListManager(props) {
  const {
    reserveData,
    getReservesWithDate,
    getOrderer,
    finishTheReserve,
    addPoint,
    date,
    setDate
  } = props

  useEffect(()=> {
    const dateFormate = dayjs(date).format('YYYY-MM-DD')
    getReservesWithDate(dateFormate)
  }, [date])

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button, { backgroundColor: '#445877' }]}>
          <Pressable onPress={() => console.log('hey')}>
            <Text style={styles.buttonText}>修改</Text>
          </Pressable>
        </View>
        <View style={[styles.button,{backgroundColor:'red'}]}>
          <Pressable onPress={() => console.log('hey')}>
            <Text style={styles.buttonText}>取消</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const tagToTime = (tag) => {
    const time = TIME.find((item)=>item.tag === tag).time
    return time
  }


  const handleOnFinish = async(reversation) => {
    const key = reversation.qrCodeKey
    const uid = reversation.userId
    const ordererRes = await getOrderer(uid)
    console.log('ordererRes', ordererRes)

    const ordererId = Object.keys(ordererRes)[0]
    const ordererData = Object.values(ordererRes)[0]
    const ordererPrevPoints = ordererData.GotPoint
    const ordererCurPoints = ordererData.AllPoint

    await finishTheReserve(key)
    const findTheRoom = ROOMS.find(room=>room.alians === reversation.room)

    const gotPointData = {
      type: reversation.room,
      points: findTheRoom.points* reversation.time.length,
      time: new Date()
    }
    let newPointsData
    if ((Array.isArray(ordererPrevPoints))){
        newPointsData = [...ordererPrevPoints, gotPointData]
    }else {
        newPointsData = [gotPointData]
    }
    const newCurPoints = ordererCurPoints + (findTheRoom.points * reversation.time.length)
    const status = await addPoint(uid, ordererId, newPointsData, newCurPoints)
    if(status === 200) {
      const dateFormate = dayjs(date).format('YYYY-MM-DD')
      getReservesWithDate(dateFormate)
    }
  }

  const renderItem = ({ item }) => {
    const tiemSize = item.time.length
    return (
      <View style={styles.item}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={styles.date}>{dayjs(item.date).month() + 1}月</Text>
        <Text style={styles.date2}>{dayjs(item.date).date()}</Text>
        <Text style={styles.date}>{dayjs(item.date).year()}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
      {tiemSize > 1 ? (
          <>
            <Text style={styles.times}>{tagToTime(item.time[0])}</Text>
            <Text style={{fontSize: 8}}>|</Text>
            <Text style={styles.times}>{tagToTime(item.time[tiemSize - 1])}</Text>
          </>
        ) : <Text style={styles.times}>{tagToTime(item.time[0])}</Text>      }
      </View>
      <View style={styles.item2}>

        <Text style={styles.rooms}>{ALIANS[item.room]}</Text>
      </View>
      {item.status === 'UNDONE' ? (
        <View style={{ justifyContent: 'center' }}>
         <Button style={styles.QRcode} onPress={() => (
            Alert.alert(
              '完成租借',
              '請確認是否確實完成',
              [
                { text: '確認', onPress: () => handleOnFinish(item) },
                {
                  text: '取消',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel'
                }
              ],
              { cancelable: false }
          )
         )}>
           <Text>完成</Text>
         </Button>
        </View>
      ) : (
        <View style={{ justifyContent: 'center' }}>
        <Button style={[styles.QRcode, { backgroundColor: '#eee'}]} disabled>
          <Text>已完成</Text>
        </Button>
      </View>
      )}
    </View>
    )
  };


  return (
     <View>
      <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={(e, date)=>setDate(date)}
          style={{ marginHorizontal: 50 }}
        />
      {
        reserveData && reserveData.length === 0 ?
        <View>
          <Text style={{ textAlign: 'center' }}>無預約資料</Text>
        </View>
        :(
        <>
          <View style={styles.split}/>
          <SwipeableFlatList
            keyExtractor={(item) => item.id}
            data={reserveData}
            renderItem={renderItem}
            maxSwipeDistance={240}
            renderQuickActions={({index, item}) => QuickActions(index, item)}
            shouldBounceOnMount={true}
            ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>}
          />
        </>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({

  // list每一個item
  item: {
    backgroundColor:'#fff',
    height: 100,
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection:'row',
    flex:1,
    alignItems: 'center',


  },
  item2: {

    height: 80,
    padding: 10,
    borderBottomColor: '#eee',
    flexDirection:'column',
    flex:2,
    alignItems:'center'


  },

  //item和item之間
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },

  // 左滑(底下)的container
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // 左滑的button
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dd5454'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  date:{
    fontSize:18,
    color:'#6b6b6b',
    textAlign:'center'
  },
  date2:{
    fontSize:30,
    color:'#6b6b6b',
    textAlign:'center',
    fontWeight:'bold',


  },
  rooms:{
    fontSize:25,
    marginTop:10
   },
  times:{
    fontSize:15,
    color:'#6b6b6b'
  },
  QRcode:{
    width:50,
    height:50,
    justifyContent:'center',
    backgroundColor:'rgb(215, 195, 217)',
  },
  split: {
    height: 16,
    backgroundColor: '#eee'
  }

})

export default SwipeListManager