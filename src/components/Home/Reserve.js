import React,{useState, useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image, } from 'react-native'
//import {Picker} from '@react-native-community/picker';
import { Container,Icon, Button, Content,Picker} from 'native-base'
import Header from '../UI/Header'
import {Card, Avatar} from 'react-native-paper';
import routeConfig from '../../constants/route'
import {useNavigation} from '@react-navigation/native'
import Colors from '../../styles/Colors';
import { Calendar } from 'react-native-calendars';



function Reserve(props) {
  const navigation = useNavigation();
  //const [selectedValue, setSelectedValue] = useState("BIG");
  const[items,setItems] =useState({});
  const [date, setDate] = useState('2020-12-02')

  const [room, setRoom] = useState('BIG');


  return (
    <Container>
      <Header/>
      <Content>
      <View style={styles.container}>
      <Text style={styles.font} >*請選擇團室</Text>

      {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="大練團室" value="BIG" />
        <Picker.Item label="中練團室" value="MEDIUM" />
        <Picker.Item label="小練團室" value="LITTLE" />
        <Picker.Item label="鼓室" value="3" />

      </Picker> */}
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
        <Picker.Item label="鼓室" value="3" />

      </Picker>


      </View>

      <View style={styles.calendar}>
      <Text style={styles.fontdate} >*請選擇日期</Text>
      <Calendar
  // Initially visible month. Default = Date()
  current={date}
  markedDates={{
    [date]: {selected: true, selectedColor: 'blue'},
  }}
  minDate={'2012-05-10'}
  maxDate={'2021-05-30'}
  onDayPress={(day) => setDate(day.dateString)}
  onDayLongPress={(day) => setDate(day.dateString)}
  monthFormat={'yyyy MM'}
  onMonthChange={(month) => {console.log('month changed', month)}}
  hideArrows={false}
  renderArrow={(direction) => <Text>{direction}</Text>}
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
    padding:30}}>*可預約時段</Text>
<Text style={{padding:20}}>*灰色表示該時段已被預訂，可點選檢視其他可預約日期</Text>
{/* <Text>{date}</Text> */}
   <View style={styles.button}>
   <Button light ><Text style={styles.buttontext}>9:00~10:00</Text></Button>
     <Button light><Text style={styles.buttontext}>10:00~11:00</Text></Button>
     <Button light><Text style={styles.buttontext}>11:00~12:00</Text></Button>
     <Button light><Text style={styles.buttontext}>12:00~13:00</Text></Button>

     </View>
     <View style={styles.button}>
     <Button light><Text style={styles.buttontext}>13:00~14:00</Text></Button >
     <Button light><Text style={styles.buttontext}>14:00~15:00</Text></Button>
     <Button light><Text style={styles.buttontext}>15:00~16:00</Text></Button>
     <Button light><Text style={styles.buttontext}>16:00~17:00</Text></Button>
     </View>
     <View style={styles.button}>
     <Button light><Text style={styles.buttontext}>17:00~18:00</Text></Button>
     <Button light><Text style={styles.buttontext}>18:00~19:00</Text></Button>
     <Button light><Text style={styles.buttontext}>19:00~20:00</Text></Button>
     <Button light><Text style={styles.buttontext}>20:00~21:00</Text></Button>
     </View>


      {/* <View
          style={{
          margin: 12,
          alignSelf: 'flex-end',
          backgroundColor: Colors.primary,
          width: 80,
          height: 80,
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center'
          }}>
        <Icon style={styles.botton}
        onPress={()=> navigation.navigate(routeConfig.ReserveDate,{selectedValue: selectedValue})}
        type="FontAwesome5" name="arrow-right" />
      </View> */}
      </Content>
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
    padding:10

  },
  button:{
    margin: 20,
    color:"#841584",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',

  },
  buttontext:{
    color: '#fff',
    justifyContent:'space-around'

  },
  border:{
    borderWidth: 2,
    borderColor: '#eee',
    justifyContent:'center',
    alignContent: "center",
  },
  calendar:{
    padding:35,

  }

});



export default Reserve