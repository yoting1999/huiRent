import React, { useState } from 'react'
import { View, StyleSheet, Dimensions,Text, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


import Header from '../UI/Header'
import Slide, { SLIDE_HEIGHT } from '../UI/Slide'

const { width } = Dimensions.get("window")


const IMG_DATA = [
  'https://ysolife.com/wp-content/uploads/2017/11/06-%E4%B8%AD%E7%B7%B4-min.jpg',
  'http://www.irockmusic.com.tw/wp-content/uploads/2019/11/IMG_0761-1024x683.jpg',
  'http://www.irockmusic.com.tw/wp-content/uploads/2018/07/%E5%9C%98%E5%AE%A4%E5%87%BA%E7%A7%9F.jpg',
  'https://img.ruten.com.tw/s2/7/f7/f2/21729744938994_881.JPG'
]

function Home() {

  // const [ currentIndex, setCurrentIndex ] = useState(0)

  // const handleScroll = (e) => {
  //   console.log('x', e.nativeEvent.contentOffset.x)
  //   const index = Math.round(e.nativeEvent.contentOffset.x / width);
  //   console.log('index', index)
  //   setCurrentIndex(index)
  // }

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View
        style={styles.slider}
      >
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={16}
          // onMomentumScrollEnd={handleScroll}
          >
          <Slide label="展演廳" bgImg={IMG_DATA[0]} price="480"/>
          <Slide label="大練團室" bgImg={IMG_DATA[1]} price="300" right/>
          <Slide label="小練團室" bgImg={IMG_DATA[2]} price="200" />
          <Slide label="鼓室" bgImg={IMG_DATA[3]} right price="50" />
        </ScrollView>
        </View>

        <View style={styles.footer}>
          <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0, .9)'}} />
          <View style={{ flex: 1,backgroundColor: '#fff', borderTopLeftRadius: 75}}>
          <Text style={styles.brand}>©2020 HUIRENT</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'red',
    borderBottomRightRadius: 75,
    overflow: 'hidden'
  },
  footer: {
    flex: 1,
  },
  brand: {
    position: 'absolute',
    right: 8,
    bottom: 0,
    color: '#ccc'
  }
})

export default Home