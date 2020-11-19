import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { Container, Content } from 'native-base'

import SwipeableFlatList from 'react-native-swipeable-list';
import Colors from '../../styles/Colors';

import Header from './Header'

const data = ['sunny','huihui','tien','zoei']
const QuickActions = (index, qaItem) => {
  return (
    <View style={styles.qaContainer}>
      <View style={styles.button}>
        <Pressable onPress={() => console.log('hey')}>
          <Text style={styles.buttonText}>DELETE</Text>
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

function SwipeList() {
  return (
   <Container>
     <Header/>
     <View style={{ flex: 1 }}>
      <Text>LIST</Text>
      <SwipeableFlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        maxSwipeDistance={80}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
        shouldBounceOnMount={true}
        ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>}
        // contentContainerStyle={{ flexGrow: 1,backgroundColor: 'red'}}
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