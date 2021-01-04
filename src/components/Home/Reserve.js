import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Container,Icon, Button, Content,Picker} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import Spinner from 'react-native-loading-spinner-overlay'
import { Calendar } from 'react-native-calendars';
import Header from '../UI/Header'
import routeConfig from '../../constants/route'
import Colors from '../../styles/Colors';

import { ROOMS, TIME } from '../../constants/rooms'

const TODAY = dayjs().format('YYYY-MM-DD')
const ONE_MONTH_LATER = dayjs(TODAY).add(1, 'month').format('YYYY-MM-DD')
const UNDONE = 'UNDONE'
const DEFAULT_CAN_CHOOSE = [...Array(12).keys()]
const TIME_MAP = ['A','B','C','D','E','F','G','H','I','J','K','L']

function Reserve(props) {
  const navigation = useNavigation();
  const { userInfo, getReserves, reserveData, isLoading, type, reviseData } = props
  const [date, setDate] = useState(TODAY)
  const [time, setTime] = useState([])
  const [room, setRoom] = useState('BIG');

  const [prevTime, setPrevTime] = useState([])
  const [isReservedTime, setIsReservedTime] = useState(null)
  const [status,setStatus] = useState(UNDONE)


  const [canChoose, setCanChoose] = useState(DEFAULT_CAN_CHOOSE)
  const [tempArr, setTempArr] = useState([])

  useEffect(()=>{
    const timeTagArr = [...tempArr].map(item => TIME_MAP[item])
    setTime(timeTagArr)
  }, [tempArr])

  useEffect(()=>{
    if(!reviseData) return
    const temp = reviseData.time.map((tag, index)=> TIME_MAP.indexOf(tag))
    if (date === reviseData.date) {
      const temparr = sequeceRevise(temp)
      setTempArr(temp)
      setCanChoose(temparr)
    }else {
      setTempArr([])
      setCanChoose(DEFAULT_CAN_CHOOSE)
    }
  }, [date])

  useEffect(()=>{
    if(!reviseData) return
    const temp = reviseData.time.map((tag, index)=> TIME_MAP.indexOf(tag))
    const temparr = sequeceRevise(temp)
    setDate(reviseData.date)
    setCanChoose(temparr)
    setTempArr(temp)
    setPrevTime(reviseData.time)
    setRoom(reviseData.room)
  }, [reviseData])

  const sequeceRevise = (temp) => {
    const size = temp.length
    let temparr
    if(size === 1 ) {
      temparr = [ temp[0] - 2, temp[0] - 1 , temp[0] , temp[0] + 1 , temp[0] + 2]
    }

    else if(size === 2) {
      if(temp[1] - temp[0] === 1) temparr = [ temp[0] - 1 , temp[0], temp[1], temp[1] + 1 ]
      else temparr = [ temp[0], temp[0] + 1, temp[1] ]
    }

    else if(size === 3) {
      temparr = [...temp]
    }

    else if(size === 0) {
      temparr = DEFAULT_CAN_CHOOSE
    }
    return temparr
}

  const handleSubmit = () => {
    const price = ROOMS.find((r)=>r.alians === room).price
    if(tempArr.length === 2 && tempArr[1] - tempArr[0] > 1) {
      Alert.alert(
        '選擇錯誤',
        '請選擇多個連續的時段',
        [
            { text: '返回', onPress: () => console.log('ok') }
        ],
        { cancelable: false }
      )
      return
    }
    navigation.navigate(routeConfig.ReserveConfirm, { reserveData: { date, time, room,price,status }, userInfo, reviseData })
  }

  const sequence = (index) => {
    let temp
    let arr
    const isNotInCanChoose = canChoose.indexOf(index) < 0

    if(isNotInCanChoose) {
      arr = [index]
    } else {
      arr = [...tempArr]
      const argIndex = arr.indexOf(index)
      const isExisted = argIndex > -1
      if (isExisted) {
        arr.splice(argIndex, 1)
      }else {
        arr.push(index)
      }
      arr.sort()
    }

    const size = arr.length
    if(size === 1 ) {
      temp = [ arr[0] - 2, arr[0] - 1 , arr[0] , arr[0] + 1 , arr[0] + 2]
    }

    else if(size === 2) {
      if(arr[1] - arr[0] === 1) temp = [ arr[0] - 1 , arr[0], arr[1], arr[1] + 1 ]
      else temp = [ arr[0], arr[0] + 1, arr[1] ]
    }

    else if(size === 3) {
      temp = [...arr]
    }

    else if(size === 0) {
      temp = DEFAULT_CAN_CHOOSE
    }

    setTempArr(arr)
    setCanChoose(temp)
  }

  useEffect(()=>{
    if(!type) return
    setRoom(type)
  }, [type])

  useEffect(()=>{
    getReserves(date, room)
  }, [date, room])

  useEffect(()=>{
    if(!reserveData) return
    let data = []
    const isReservedArray = reserveData.map((item)=>item.time.map(t=>data.push(t)))
    setIsReservedTime(data)
  }, [reserveData])

  return (
    <Container>
      <Header/>
      <Content>
      <View style={styles.container}>
      <Text style={styles.font} >請選擇團室</Text>
      {
        !!room && (
          <Picker
          placeholder={{
            label: 'Select a room...',
            value: null,
          }}
          mode="dropdown"
          selectedValue={room}
          style={{height: 60, width: 150, borderColor: 'black'}}
          onValueChange={itemValue => setRoom(itemValue)}>
            <Picker.Item label="大練團室" value="BIG" />
            <Picker.Item label="中練團室" value="MEDIUM" />
            <Picker.Item label="小練團室" value="LITTLE" />
            <Picker.Item label="鼓室"     value="DRUM" />
        </Picker>
        )
      }

      </View>
      <View style={styles.calendar}>
      <Text style={styles.fontdate} >請選擇日期</Text>
      <Text >*如需預約不同天，請分次預約</Text>
      <Calendar
        current={date}
        markedDates={{
          [date]: {selected: true, selectedColor: Colors.primary},
        }}
        minDate={TODAY}
        maxDate={ONE_MONTH_LATER}
        onDayPress={(day) => setDate(day.dateString)}
        onDayLongPress={(day) => setDate(day.dateString)}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideArrows={false}
        renderArrow={(direction) => <Text>{direction === 'left' ? '<' : '>'}</Text>}
        hideExtraDays={false}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => <Text>{date.getMonth()+1} / {date.getFullYear()}</Text>}
        enableSwipeMonths={true}
      />
  </View>
  <Text
    style={{
      borderWidth: 2,
      borderColor: '#eee',
      alignContent: "center",
      fontSize:16,
      fontWeight:'bold',
      padding:30}}
    >
      可預約時段
  </Text>
  <Text style={{ paddingHorizontal: 20, paddingTop: 16 }}>*可選擇<Text style={{ color: 'red' }}>「連續」</Text>的三個時段</Text>

  <View style={{ paddingHorizontal: 20, marginTop: 12 }}>
    <View style={styles.infoRow}>
      <View style={[styles.infoBox, { backgroundColor: '#595959' }]}></View>
      <Text style={{ marginRight: 6 }}>表示該時段已被預訂</Text>
      <View style={[styles.infoBox, { borderColor: '#000', borderWidth: .5 }]}></View>
      <Text>目前可選擇的連續時段</Text>
    </View>
    <View style={styles.infoRow}>
      <View style={[styles.infoBox, { backgroundColor: Colors.primary }]}></View>
      <Text>目前已選擇時段</Text>
    </View>
  </View>
    <View style={styles.button}>
      {TIME.map((item, index)=>{
        const isChoosed = tempArr.includes(index)
        const isCanNotChoose = canChoose.indexOf(index) < 0
        const isReserved = isReservedTime && isReservedTime.includes(item.tag) && !prevTime.includes(item.tag)
        return (
          <Button
            disabled={isReserved}
            bordered
            light
            style={{
                margin: 6,
                padding: 4,
                backgroundColor: isReserved ? '#595959' : isCanNotChoose ? '#eee'  : isChoosed ? Colors.primary : '#fff'
              }}
            onPress={()=>{
              // handleOnSetTimes(item.tag)
              sequence(index)
            }}>
            <Text style={[styles.buttontext, {  color: isReserved ? '#fff' : '#000' }]}>{item.time}</Text>
          </Button>
        )
      })}
     </View>
      <TouchableOpacity
        style={[styles.submitBtn, {backgroundColor: time.length === 0? '#ccc' :Colors.primary }]}
        onPress={handleSubmit}
        disabled={time.length === 0}
      >
          <Icon
            style={{ fontSize: 18 }}
            type="FontAwesome5" name="arrow-right" />
      </TouchableOpacity>
      </Content>
      <Spinner visible={isLoading}/>
    </Container>
  );

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignItems: "center",
    flexDirection:'row',
    borderWidth: 2,
    borderColor: '#eee',

  },
  font:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:6,
    padding:30

  },
  fontdate:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:20,
    padding:10,

  },
  button:{
    margin: 10,
    color:"#841584",
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap: 'wrap'
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6
  },
  infoBox: {
    width: 10,
    height: 10,
    marginRight: 10
  },
  border:{
    borderWidth: 2,
    borderColor: '#eee',
    justifyContent:'center',
    alignContent: "center",
  },
  calendar:{
    padding:35,
  },
  submitBtn: {
    margin: 12,
    alignSelf: 'flex-end',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }

});



export default Reserve