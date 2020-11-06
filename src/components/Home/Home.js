import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Header, Left, Body, Right, Container, Content, Thumbnail, Button, Icon } from 'native-base'

import Colors from '../../styles/Colors'

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const RATING = 3

const dummyDATA = [
  {
    name: '展演廳',
    price: 400,
    uri: 'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'
  },
  {
    name: '中練',
    price: 300,
    uri: 'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'
  },
  {
    name: '小練',
    price: 200,
    uri: 'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'
  },
  {
    name: '鼓室',
    price: 50,
    uri: 'https://static.wixstatic.com/media/eccb17_676bf61b62ce44de82155a6d23207f42.jpg/v1/fill/w_363,h_288,al_c,q_80,usm_0.66_1.00_0.01/eccb17_676bf61b62ce44de82155a6d23207f42.webp'
  },

]

function Home(props) {
  return (
    <Container>
      <Header style={{backgroundColor: Colors.primary}} transparent>
        <Left></Left>
        <Body>
        </Body>
        <Right>
          <Button transparent onPress={()=>console.log('profile')}>
            <>
              <Thumbnail small source={{uri: uri}} />
              {
                [...Array(RATING)].map((e, i)=>{
                  return <Icon key={`star-${i + 1}`} style={{fontSize: 20}} name="star"/>
                })
              }
            </>
          </Button>
        </Right>
      </Header>
      <Content>
        <Text>HOME</Text>
      </Content>
    </Container>
  )
}

export default Home