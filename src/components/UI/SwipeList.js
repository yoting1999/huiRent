import React from 'react'
import { View, StyleSheet, Text, Pressable,FlatList } from 'react-native'
import { Container, Content } from 'native-base'

import SwipeableFlatList from 'react-native-swipeable-list';
import Colors from '../../styles/Colors';

import Header from './Header'

const DATA = [
  {
    id: '1',
    title: '2020/10/30',
    time1:'13:30',
    time2:'15:30',
    room:'大練團室'

  },
  {
    id: '2',
    title: '2020/10/30',
    time1:'13:30',
    time2:'15:30',
    room:'大練團室'
  },
  {
    id: '3',
    title: '2020/10/30',
    time1:'13:30',
    time2:'15:30',
    room:'大練團室'
  },
];

const QuickActions = (index, qaItem) => {
  return (
    <View style={styles.qaContainer}>
      <View style={[styles.button, { backgroundColor: 'green' }]}>
        <Pressable onPress={() => console.log('hey')}>
          <Text style={styles.buttonText}>修改</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Pressable onPress={() => console.log('hey')}>
          <Text style={styles.buttonText}>刪除</Text>
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
const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  <Text>{item.time1}~{item.time2}</Text>
  <Text>{item.room}</Text>
  </View>
    
  );

function SwipeList() {
  return (
   <Container>
     <View style={{ flex: 1 }}>
      <SwipeableFlatList
        keyExtractor={(item) => item.id}
        data={DATA}
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
    height: 80,
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },

  //item和item之間
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc'
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
  }
})

export default SwipeList