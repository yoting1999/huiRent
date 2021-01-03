import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {useSelector } from 'react-redux'
import { GiftOption } from '../../constants/gift';
import dayjs from 'dayjs'

const App = () => {
  const userInfo = useSelector(state=>state.authReducer.userInfo)

  const renderItem = ({ item }) => {
    const gift = GiftOption.find(gift=>gift.name === item.name)
    return (
      <>
        <View style={styles.item}>
          <Text style={styles.title}>{ gift.name}</Text>
          <Text style={styles.inside}>{"-"} {item.costpoint}</Text>
        </View>
        <View style={styles.item2}>
          <Text  style={styles.date}>{dayjs(item.time).format('YYYY/MM/DD HH:MM')}</Text>
        </View>
      </>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={!!userInfo.UsedPoint && userInfo.UsedPoint}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
  },
  item: {
    backgroundColor: '#fff',
    marginLeft:5,
    padding:10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'


  },
  item2:{
    marginBottom:10,
    marginLeft:5,
    padding:10,

  },
  title: {
    fontSize:20,
  },
  date:{
      fontSize:15,
      color:'#6b6b6b',
  }
  ,
  inside:{
    textAlign:'right',
    fontSize:20
  },
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc'
  },
});

export default App;