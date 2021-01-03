import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {useSelector } from 'react-redux'
import { ALIANS } from '../../constants/rooms';
import dayjs from 'dayjs';

const App = () => {
  const userInfo = useSelector(state=>state.authReducer.userInfo)

  const renderItem = ({ item }) => {
    if (typeof item !== 'object') return <Text style={{ textAlign: 'center' }}>無紀錄</Text>
    return (
      <React.Fragment>
        <View style={styles.item}>
          <Text style={styles.title}>{ item.type === 'Lottery' ? '轉盤' : ALIANS[item.type]} </Text>
          <Text style={styles.inside}>{"+"}{item.points} </Text>
        </View>
        <View style={styles.item2}>
          <Text style={styles.date}>{ dayjs(item.time).format('YYYY/MM/DD HH:MM')} </Text>
        </View>
      </React.Fragment>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={!!userInfo.GotPoint && userInfo.GotPoint}
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
    fontSize: 20,
  },
  date:{
    fontSize:15,
    color:'#6b6b6b'

  },
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