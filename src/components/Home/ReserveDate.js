import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import { Container} from 'native-base'
import Header from '../UI/Header'
import {Agenda} from 'react-native-calendars';
import {Card, Avatar, Button} from 'react-native-paper';


// type Item ={
//   name:string;
//   reserve:boolean;
// }
const timeToString=(time)=> {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  function ReserveDate(props) {
    const [items, setItems] = useState({});
      // const[items,setItems] =useState ({key: string} : Item})({
      //   '2020-12-16' :[
      //     {name :'A1',reserve: true},
      //     {name :'A2',reserve: true},
      //     {name :'B1',reserve: true},
      //   ],
      //   '2020-12-17':[
      //     {name :'B1',reserve: true},
      //     {name :'C1',reserve: false},
          
      //   ]
      // });

      // useEffect(() => {
      //   const getData = async () => {
      //     const response
      //   }

      // })

      
      const loadItems=(day)=> {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 1000);
      }
      const renderItem = (item)=>{
        return(
          <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <Card>
              <Card.Content>
                <View style={styles.list}>
                  <Text>{item.name}</Text>
                  {/* <Text>{item.reserve ? 'yes' : 'no'}</Text> */}
                  <Avatar.Text label="Y"/>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )
      }
      
    return (
      <Container>
        <Header/>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2020-12-16'}
          renderItem={renderItem}
          
        />
     
      </Container>
    );
    
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    },
    font:{
      paddingTop:5,
      fontSize:20,
      alignContent: "center"
    },
    list:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });

export default ReserveDate;