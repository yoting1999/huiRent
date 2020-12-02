import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: '2020/10/30',
    point:'200'

  },
  {
    id: '2',
    title: '2020/10/30',
    point:'100'
  },
  {
    id: '3',
    title: '2020/10/30',
    point:'100'
  },
];

const Item = ({ title,point }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{point}</Text>
  </View>
);



const App = () => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.inside}>{item.point}</Text>
  </View>
    
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
    marginBottom:20,
    marginLeft:5,
    padding:30,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'

  },
  title: {
    fontSize: 30,
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