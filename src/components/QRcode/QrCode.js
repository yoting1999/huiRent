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
        <Text style={{fontSize:30,marginBottom:25,color:'#c2c2c2'}}>請出示此畫面掃描</Text>
        <QRCode
          size={300}
          value={value}
          logo={logoFromFile}
          logoSize={30}
          logoBackgroundColor='#fff'
        />
        <View style={{justifyContent:'center',paddingTop:50}}>
      <Button style={styles.QRcode} onPress={()=>navigation.navigate(route.scanner)}>
        <Text>SCANNER</Text>
      </Button>
      </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  QRcode:{
    width:100,
    height:50,
    justifyContent:'center',
    backgroundColor:'rgb(215, 195, 217)',
  }

})

export default QrCode