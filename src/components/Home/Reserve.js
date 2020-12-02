import React,{useState, useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import {Picker} from '@react-native-community/picker';
import { Container,Icon, Button,} from 'native-base'
import Header from '../UI/Header'
import {Card, Avatar} from 'react-native-paper';
import routeConfig from '../../constants/route'
import {useNavigation} from '@react-navigation/native'
import Colors from '../../styles/Colors';
import { Calendar } from 'react-native-calendars';



function Reserve(props) {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("BIG");
  const[items,setItems] =useState({});
  const [date, setDate] = useState('2020-12-02')
   
  
  return (
    <Container>
      <Header/>
      <Image source={{uri:'https://ysolife.com/wp-content/uploads/2017/11/05-%E5%A4%A7%E7%B7%B4-min-768x510.jpg'}} style={{height:200}}/>
    
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

<Text>{date}</Text>
    
    <View style={styles.container}>
      <Text style={styles.font}>選擇租借團室</Text>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="大練團室" value="BIG" />
        <Picker.Item label="中練團室" value="MEDIUM" />
        <Picker.Item label="小練團室" value="LITTLE" />
        <Picker.Item label="鼓室" value="3" />

      </Picker>
      
      </View>
      
      <View 
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
      </View>
    </Container>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    alignItems: "center"
  },
  font:{
    fontSize:30,
    alignContent: "center"
    
  },
  botton:{
    // paddingBottom:250,
    // paddingLeft:200
  }
  
});



export default Reserve