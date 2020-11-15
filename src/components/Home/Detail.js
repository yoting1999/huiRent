import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import { Container, Content, Button, Icon } from 'native-base'
import Header from '../UI/Header'

function Detail(props) {
  return (
    <Container>
      <Header/>
      <Content>
        <Text>DETAIL</Text>
      </Content>
    </Container>
  )
}

export default Detail