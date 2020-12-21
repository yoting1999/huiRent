import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Pressable,Platform } from 'react-native'
import { Container, Button, Content } from 'native-base'
import SwipeableFlatList from 'react-native-swipeable-list';
import Colors from '../../styles/Colors';
import dayjs from 'dayjs'
import { ALIANS, TIME } from '../../constants/rooms'
import { useNavigation } from '@react-navigation/native';
import route from '../../constants/route';
import DateTimePicker from '@react-native-community/datetimepicker';

const TODAY = new Date()
function SwipeList(props) {
  const { reserveData, getReservesWithDate } = props

  const navigation = useNavigation()

  const [date, setDate] = useState(TODAY)

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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{flexDirection:'column',flex:1}}>
        <Text style={styles.date}>{dayjs(item.date).month()+1}月</Text>
        <Text style={styles.date2}>{dayjs(item.date).date()}</Text>
        <Text style={styles.date}>{dayjs(item.date).year()}</Text>
      </View>
      <View style={styles.item2}>
        {item.time.map(t=><Text style={styles.times}>{tagToTime(t)}</Text>)}
        <Text style={styles.rooms}>{ALIANS[item.room]}</Text>
      </View>
      <View style={{justifyContent:'center'}}>
      <Button style={styles.QRcode} onPress={()=>navigation.navigate(route.qrcode, { value: item.qrCodeKey })}>
        <Text styles={{}}>租借</Text>
      </Button>
      </View>
    </View>

    );

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
    flex:1


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

export default SwipeList