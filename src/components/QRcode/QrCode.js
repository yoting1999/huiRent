import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Button } from 'native-base'
import Header from '../UI/Header'
import QRCode from 'react-native-qrcode-svg';
import route from '../../constants/route';

import { useNavigation } from '@react-navigation/native';

const logoFromFile = require('../../../pic/music.png');

function QrCode(props) {
  const { value } = props.route.params
  const navigation = useNavigation()

  return (
    <Container>
      <Header/>
      <Content contentContainerStyle={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <QRCode
          size={300}
          value={value}
          logo={logoFromFile}
          logoSize={30}
          logoBackgroundColor='#fff'
        />
      <Button bordered onPress={()=>navigation.navigate(route.scanner)}>
        <Text>SCANNER</Text>
      </Button>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({

})

export default QrCode