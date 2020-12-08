import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet,Alert,Image,ImageBackground,Button,TextInput} from 'react-native'
import { Container,Right,Content} from 'native-base'
import Header from '../UI/Header'
import Colors from '../../styles/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Email1 = [
    {email:'test@gmail.com'},
   
]
const renderItem = ({ item }) => (
    <View style={styles.item} >
        <Text style={styles.text}>編輯電子信箱</Text>
      <TextInput style={styles.in}>{item.email}</TextInput>
      <TouchableOpacity onPress={() => {Alert.alert(item.name,"確認更改?")}}>
                  <Text style={styles.text1}>確定</Text>
                </TouchableOpacity>
    </View>
      
    );

function Email (props){
    return(
        <Container style={styles.container}>
        <Header/>
        <Content>
        <View style={styles.item1}>
        <FlatList
            data = {Email1}
            renderItem = {renderItem}
        />
    </View>
    </Content>
    </Container>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7f7f7',
    },
    in:{
        borderBottomWidth:1,
        borderColor:'#cccc',
        borderRadius:10,
        height:40,
        width:300,
        textAlign:'center',
        color:'gray',
        fontSize:18,

    },
    item:{
        padding:30,
        alignContent:'center',
        justifyContent:'center',
        marginBottom:30,
    },
    item1:{
        alignContent:'center',
        justifyContent:'center',

    },
    text:{
        fontSize:20,
        textAlign:'center',
        paddingBottom:30,
    },
    text1:{
        backgroundColor:'rgb(215, 195, 217)',
        textAlign:'center',
        fontSize:20,
        padding:10,
        marginTop:30,
        marginLeft:100,
        marginRight:100,
        justifyContent:'center',
        color:'white'
    }


    
        
        

  });

export default Email