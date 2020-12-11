import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import Header from '../UI/Header'
import QRCode from 'react-native-qrcode-svg';


const logoFromFile = require('../../../pic/music.png');

function QrCode() {
  return (
    <Container>
      <Header/>
      <Content contentContainerStyle={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <QRCode
          size={300}
          value="Just some string value"
          logo={logoFromFile}
          logoSize={30}
          logoBackgroundColor='#fff'
        />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({

})

export default QrCode