import React from 'react'
import { View, StyleSheet, Text, Pressable,FlatList } from 'react-native'
import { Container, Content, Button } from 'native-base'
import Dash from 'react-native-dash'
import SwipeableFlatList from 'react-native-swipeable-list';
import Colors from '../../styles/Colors';
import dayjs from 'dayjs'
import { ALIANS, TIME } from '../../constants/rooms'
import { useNavigation } from '@react-navigation/native';
import route from '../../constants/route';

const DATA = [
  {
    id: '1',
    title: '10',
    title2:'30',
    title3:'2020',
    time1:'13:30',
    time2:'15:30',
    room:'中練團室',
    uri:'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'

  },
  {
    id: '2',
    title: '10',
    title2:'30',
    title3:'2020',
    time1:'14:30',
    time2:'16:30',
    room:'小練團室',
    uri:'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'
  },
  {
    id: '3',
    title: '10',
    title2:'30',
    title3:'2020',
    time1:'12:00',
    time2:'15:00',
    room:'鼓室',
    uri:'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'
  },
];



function SwipeList(props) {
  const { reserveData } = props

  const navigation = useNavigation()

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
        {/* <View style={[styles.button, styles.button2]}>
          <Pressable onPress={() => snoozeItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button2Text]}>Snooze</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => deleteItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View> */}
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
        <Text style={styles.date2}>{dayjs(item.date).date()+1}</Text>
        <Text style={styles.date}>{dayjs(item.date).year()}</Text>
      </View>
      <View style={styles.item2}>
        {item.time.map(t=><Text style={styles.times}>{tagToTime(t)}</Text>)}
        <Text style={styles.rooms}>{ALIANS[item.room]}</Text>
      </View>
      <Button bordered onPress={()=>navigation.navigate(route.qrcode, { value: item.qrCodeKey })}>
        <Text>QRCODE</Text>
      </Button>
    </View>

    );

  return (
   <Container>
     <View style={{ flex: 1 }}>
      <SwipeableFlatList
        keyExtractor={(item) => item.id}
        data={reserveData}
        renderItem={renderItem}
        maxSwipeDistance={160}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
        shouldBounceOnMount={true}
        ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>}
        // contentContainerStyle={{ flexGrow: 1,backgroundColor: 'red'}} // 背景顏色
      />
    </View>
   </Container>
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
    fontWeight:'bold'

  },
  rooms:{
    fontSize:25,
    marginTop:10
   },
  times:{
    fontSize:15,
    color:'#6b6b6b'
  }

})

export default SwipeList