import React from 'react'
import { Header, Left, Body, Right, Thumbnail, Button, Icon, Form } from 'native-base'
import{Text} from 'react-native'

import Colors from '../../styles/Colors'

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const RATING = 3

export default function HeaderLayout() {
  return (
    <Header style={{backgroundColor: Colors.primary}} transparent>
      <Left ><Text style={{fontSize:25,color:'#fff'}}>我的預約</Text></Left>
      <Body />
      <Right>
        <Button transparent onPress={()=>console.log('profile')}>
          <Thumbnail small source={{uri: uri}} />
            {
              [...Array(RATING)].map((e, i)=>{
                return <Icon key={`star-${i + 1}`} style={{fontSize: 20, color: 'yellow', marginLeft: 8}} name="star"/>
              })
            }
        </Button>
      </Right>
    </Header>
  )
}