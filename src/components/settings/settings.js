import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Thumbnail, Separator, Icon, Container, Content } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import Header from '../UI/Header'
import routeConfig from '../../constants/route'
const uri1 = "https://facebook.github.io/react-native/docs/assets/favicon.png"
const RATING = 3

function Settings(props) {
  const navigation = useNavigation()
  const { logout, changePhoto, message, refresh } = props
  const userInfo = useSelector(state => state.authReducer.userInfo)

  return (
    <Container>
      <Header title='設定' isRefresh action={refresh}>
      </Header>
      <Content>
        <TouchableOpacity onPress={changePhoto} style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>
          <Image source={{ uri: userInfo && userInfo.photo }} style={{ width: 150, height: 145, borderRadius: 120, }} />
        </TouchableOpacity>
        <Text style={styles.photowarn}>{message}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        </View>
        <View>
          <List style={{ paddingVertical: 15 }}>
            <ListItem avatar>
              <Body>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>Hi,</Text>
                <Text note>{userInfo && userInfo.name}</Text>
              </Body>
            </ListItem>
          </List>
          <List>
            <Separator bordered />

            <ListItem onPress={() => navigation.navigate(routeConfig.used)} >
              <Left>
                <Text>使用紀錄</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last onPress={() => navigation.navigate(routeConfig.all)}>
              <Left>
                <Text>已累積點數</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last onPress={() => navigation.navigate(routeConfig.Coupon)}>
              <Left>
                <Text>My Coupon</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last onPress={logout}>
              <Left>
                <Text>登出</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>


        </View>
      </Content>
    </Container>

  )
}

const styles = StyleSheet.create({

  image: {
    height: 150,
    marginHorizontal: 16,
    marginVertical: 8,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'relative',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  filter: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    borderRadius: 6
  },

  reserve: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 10,

  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 0.8
  },
  photowarn: {
    color: '#eb4034',
    paddingLeft: 160,
    paddingTop: 10
  }
})

export default Settings