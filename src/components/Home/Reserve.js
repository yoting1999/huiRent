import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import {Picker} from '@react-native-community/picker';
import { Container} from 'native-base'
import Header from '../UI/Header'
import {Card, Avatar, Button} from 'react-native-paper';
import routeConfig from '../../constants/route'
import {useNavigation} from '@react-navigation/native'



function Reserve(props) {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("1");
    const[items,setItems] =useState({});
    
   
    
  return (
    <Container>
      <Header/>
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
      <Button style={styles.botton} onPress={()=> navigation.navigate(routeConfig.ReserveDate,{selectedValue: selectedValue})}>
        <Text>NEXT</Text>
        </Button>
      
   
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
  botton:{
    paddingBottom:350
  }
  
});



export default Reserve