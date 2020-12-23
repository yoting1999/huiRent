import React from 'react'
import { View } from 'react-native'
import { Header, Left, Body, Right, Thumbnail, Button, Icon, Text } from 'native-base'

import Colors from '../../styles/Colors'

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";


export default function HeaderLayout(props) {
  const { isLoading, userInfo } = props
  const { title } = props
  return (
    <Header style={{backgroundColor: Colors.primary}} transparent>
      <View style={{ justifyContent:'center' }}>
       
        <Text style={{ fontSize: 25, color: '#fff' }}>
          {title}
        </Text>
      </View>
      <Body />
      <Right>
        <Button transparent onPress={()=>console.log('profile')}>
          <Text>{userInfo && userInfo.name}</Text>
          <Thumbnail small source={{uri: uri}} />
            
        </Button>
      </Right>
      
    </Header>
    
  )
}