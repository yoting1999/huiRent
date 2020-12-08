import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: '大練團室累積點數',
    point:'+200',
    date:'2020/10/31'

  },
  {
    id: '2',
    title: '中練團室累積點數',
    point:'+100',
    date:'2020/10/31'
  },
  {
    id: '3',
    title: '中練團室累積點數',
    point:'+100',
    date:'2020/10/31'
  },
];




const App = () => {
  const renderItem = ({ item }) => (
    <React.Fragment>
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.inside}>{item.point}</Text>
  </View>
  <View style={styles.item2}>
  <Text style={styles.date}>{item.date}</Text>
  </View>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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