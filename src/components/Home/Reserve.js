import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image, } from 'react-native'
//import {Picker} from '@react-native-community/picker';
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

function Reserve(props) {
  const navigation = useNavigation();
  const { userInfo, getReserves, reserveData, isLoading, type, reviseData } = props
  const [date, setDate] = useState(TODAY)
  const [time, setTime] = useState([])
  const [room, setRoom] = useState('BIG');

  const [prevTime, setPrevTime] = useState([])
  const [isReservedTime, setIsReservedTime] = useState(null)
  const [status,setStatus] = useState(UNDONE)


  const [canChoose, setCanChoose] = useState([])
  const [tempArr, setTempArr] = useState([])

  useEffect(()=>{
    if(!reviseData) return 
    setTime(date === reviseData.date ? reviseData.time : [])
  }, [date])

  useEffect(()=>{
    if(!reviseData) return
    if(reviseData) {
      setDate(reviseData.date)
      setTime(reviseData.time)
      setPrevTime(reviseData.time)
      setRoom(reviseData.room)
    }
  }, [reviseData])

  const handleSubmit = () => {
    const price = ROOMS.find((r)=>r.alians === room).price
    navigation.navigate(routeConfig.ReserveConfirm, { reserveData: { date, time, room,price,status }, userInfo, reviseData })
  }

  const handleOnSetTimes = (tagTime) => {
    const temp = [...time]
    const tagIndex = temp.indexOf(tagTime)
    if(tagIndex > -1) {
      temp.splice(tagIndex, 1)
    } else {
      temp.push(tagTime)
    }
    setTime(temp)
  }

  const sequence = (idx) => {
    let time = TIME.map(t=>t.tag)
    const firstIndex = 0
    const lastIndex = time.length - 1
    const num = 3 - tempArr.length

    const findIndex = tempArr.indexOf(idx)
    const isExisted = findIndex > -1

    const tempChoose = [...canChoose]
    const tempArr1 = [...tempArr]
    if(isExisted) {
      tempArr1.splice(findIndex, 1)
    }else {
      tempArr1.push(idx)
    }
    setTempArr(tempArr1)


    if(tempArr.length === 1) {
      const first = tempArr[0]
      let left = first -  num
      let right = first +  num

      if(left < firstIndex) left = firstIndex
      if(right > lastIndex) right = lastIndex

      for(let i = left ; i <= right ; i++) {
        tempChoose.push(i)
      }
      setCanChoose(tempChoose)
    }

    if(tempArr.length === 2) {

    }
  }

  useEffect(()=>{
    // console.log(canChoose, tempArr)
  }, [canChoose, tempArr])

  useEffect(()=>{
    console.log('type',typeof type)
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
  <Text style={{borderWidth: 2,
      borderColor: '#eee',
      alignContent: "center",
      fontSize:16,
      fontWeight:'bold',
      padding:30}}
    >
      可預約時段
  </Text>
  <Text style={{padding:20}}>*灰色表示該時段已被預訂，可點選檢視其他可預約日期</Text>
  {/* <Text>{date}</Text> */}
    <View style={styles.button}>
      {TIME.map((item, index)=>{
        const isChoosed = time.includes(item.tag)
        const isReserved = isReservedTime && isReservedTime.includes(item.tag) && !prevTime.includes(item.tag)
        return (
          <Button
            disabled={isReserved}
            bordered
            light
            style={{ margin: 6, padding: 4, backgroundColor: isReserved ? '#dcdcdc' : isChoosed ? Colors.primary : '#fff'}}
            onPress={()=>{
              handleOnSetTimes(item.tag)
              sequence(index)
            }}>
            <Text style={styles.buttontext}>{item.time}</Text>
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
      {/* <Spinner visible={isLoading}/> */}
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
  buttontext:{
    // color: '#fff',
    // justifyContent:'space-around',

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