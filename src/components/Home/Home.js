import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Container, Content, Button, Icon } from 'native-base'
import Header from '../UI/Header'


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
      <Header/>
      <Content>
        <Text>HOME</Text>
      </Content>
    </Container>
  )
}

export default Home