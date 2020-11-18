import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, FlatList  } from 'react-native'
import { Button, Container, Content } from 'native-base'
import { useNavigation } from '@react-navigation/native';

import Header from '../UI/Header'

import routeConfig from '../../constants/route'

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
  const [act, setAct] = useState(0)

  const navigation = useNavigation()


  return (
    <Container>
      <Header/>
      <Content>
        <View style={styles.banner}>
        </View>
        <View style={styles.brand}>
          <Text style={styles.brandTitle}>HUI RENT</Text>
          <Text style={styles.brandTitle}>HUI RENT</Text>
          <Text style={styles.brandTitle}>HUI RENT</Text>
        </View>
        {/* <FlatList
          horizontal
          data={[1,1,1,1,1]}
          renderItem={()=>{
            return (
              <TouchableOpacity onPress={() => navigation.navigate(routeConfig.roomDetail)}>
                <ImageBackground
                  imageStyle={{ borderRadius: 6}}
                  style={styles.image}
                  source={{uri: 'https://ysolife.com/wp-content/uploads/2017/11/06-%E4%B8%AD%E7%B7%B4-min.jpg'}}
                >
                  <View style={styles.filter}/>
                    <Text style={styles.roomPrice}>480 / h</Text>
                    <Text style={styles.roomName}>大展演廳</Text>
                </ImageBackground>
              </TouchableOpacity>
            )
          }}
        /> */}
        <Button disabled={act === 4} onPress={()=>{
          let newAct = act + 1
          setAct(newAct)
        }}><Text>NEXT</Text></Button>

        <Button disabled={act === 0} onPress={()=>{
          let newAct = act -1
          setAct(newAct)
        }}><Text>PREV</Text></Button>

        <View style={{flexDirection: 'row'}}>
          {[...Array(5)].map((data, index)=>{
            let num = -360
            let transformNum = num * act
            return (
              <TouchableOpacity style={{transform: [{translateX: transformNum}]}} onPress={() => navigation.navigate(routeConfig.roomDetail)}>
                <ImageBackground
                  imageStyle={{ borderRadius: 6}}
                  style={styles.image}
                  source={{uri: 'https://ysolife.com/wp-content/uploads/2017/11/06-%E4%B8%AD%E7%B7%B4-min.jpg'}}
                >
                  <View style={styles.filter}/>
                    <Text style={styles.roomPrice}>480 / h</Text>
                    <Text style={styles.roomName}>大展演廳</Text>
                </ImageBackground>
          </TouchableOpacity>
            )
          })}
        </View>
        {/* <TouchableOpacity style={{transform: [{translateX: 0}]}} onPress={() => navigation.navigate(routeConfig.roomDetail)}>
            <ImageBackground
              imageStyle={{ borderRadius: 6}}
              style={styles.image}
              source={{uri: 'https://ysolife.com/wp-content/uploads/2017/11/06-%E4%B8%AD%E7%B7%B4-min.jpg'}}
            >
              <View style={styles.filter}/>
                <Text style={styles.roomPrice}>480 / h</Text>
                <Text style={styles.roomName}>大展演廳</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            imageStyle={{ borderRadius: 6}}
            style={styles.image}
            source={{uri: 'http://www.irockmusic.com.tw/wp-content/uploads/2019/11/IMG_0761-1024x683.jpg'}}
          >
            <View style={styles.filter}/>
              <Text style={styles.roomPrice}>300 / h</Text>
              <Text style={styles.roomName}>大練團室</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            imageStyle={{ borderRadius: 6}}
            style={styles.image}
            source={{uri: 'http://www.irockmusic.com.tw/wp-content/uploads/2018/07/%E5%9C%98%E5%AE%A4%E5%87%BA%E7%A7%9F.jpg'}}
          >
            <View style={styles.filter}/>
              <Text style={styles.roomPrice}>200 / h</Text>
              <Text style={styles.roomName}>小練團室</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            imageStyle={{ borderRadius: 6}}
            style={styles.image}
            source={{uri: 'https://img.ruten.com.tw/s2/7/f7/f2/21729744938994_881.JPG'}}
          >
            <View style={styles.filter}/>
              <Text style={styles.roomPrice}>50 / h</Text>
              <Text style={styles.roomName}>練鼓室</Text>
          </ImageBackground>
        </TouchableOpacity> */}
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
    backgroundColor: '#ccc'
  },
  brand: {
    flexDirection : 'row',
    marginVertical: 32,
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: ([{ rotate: '-15deg' }])
  },
  image: {
    width: 380,
    height: 300,
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
  roomName: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.6)',
    textAlign: 'center',
    paddingVertical: 8,
    marginBottom: 32
  },
  roomPrice: {
    fontSize: 42,
    opacity: 0.6,
    fontWeight: 'bold',
    color: '#ccc',
    position:'absolute',
    right: 16,
    bottom: 0
  }
})

export default Home