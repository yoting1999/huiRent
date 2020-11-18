import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import { Container, Content, Button, Icon } from 'native-base'
import Header from '../UI/Header'


function used(props) {
    return (
      <Container>
        <Header/>
        <Content>
          <Text>可使用點數</Text>
        </Content>
      </Container>
    )
  }
  
  export default used