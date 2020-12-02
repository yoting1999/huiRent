import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import { Container, Content, Button, Icon,Separator } from 'native-base'
import Header from '../UI/Header'


function used(props) {
    return (
      <Container>
        <Header/>
        <View style={{flex:1}}>
            <Text>可使用點數</Text>
            </View>
          <View style={{flex:2}}><Text>使用紀錄</Text></View>
      </Container>
    )
  }
  
  export default used