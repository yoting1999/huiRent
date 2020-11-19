import React, { useState } from 'react'
import { View, StyleSheet, Dimensions,Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Colors from '../../styles/Colors'
import Header from '../UI/Header'
import Slide, { SLIDE_HEIGHT } from '../UI/Slide'

const { width } = Dimensions.get("window")


const dummyDATA = [
  {
    name: '展演廳',
    price: 400,
    uri: 'https://ysolife.com/wp-content/uploads/2017/11/06-%E4%B8%AD%E7%B7%B4-min.jpg'
  },
  {
    name: '中練',
    price: 300,
    uri: 'http://www.irockmusic.com.tw/wp-content/uploads/2019/11/IMG_0761-1024x683.jpg'
  },
  {
    name: '小練',
    price: 200,
    uri: 'http://www.irockmusic.com.tw/wp-content/uploads/2018/07/%E5%9C%98%E5%AE%A4%E5%87%BA%E7%A7%9F.jpg'
  },
  {
    name: '鼓室',
    price: 50,
    uri:   'https://img.ruten.com.tw/s2/7/f7/f2/21729744938994_881.JPG'
  }
]

const IMG_DATA = [
  'https://ysolife.com/wp-content/uploads/2017/11/06-%E4%B8%AD%E7%B7%B4-min.jpg',
  'http://www.irockmusic.com.tw/wp-content/uploads/2019/11/IMG_0761-1024x683.jpg',
  'http://www.irockmusic.com.tw/wp-content/uploads/2018/07/%E5%9C%98%E5%AE%A4%E5%87%BA%E7%A7%9F.jpg',
  'https://img.ruten.com.tw/s2/7/f7/f2/21729744938994_881.JPG'
]

function Home() {

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index)
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.slider}
      >
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onMomentumScrollEnd={handleScroll}
          >
          { dummyDATA && dummyDATA.map((item, index)=> {
            return <Slide bgImg={item.uri} key={`room-${index+1}`} />
          }) }
          {/* <Slide label="展演廳" bgImg={IMG_DATA[0]} price="480"/>
          <Slide label="大練團室" bgImg={IMG_DATA[1]} price="300" right/>
          <Slide label="小練團室" bgImg={IMG_DATA[2]} price="200" />
          <Slide label="鼓室" bgImg={IMG_DATA[3]} right price="50" /> */}
        </ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.label}>{ dummyDATA[currentIndex].name }</Text>
          <Text style={styles.price}>$ { dummyDATA[currentIndex].price } / h</Text>
        </View>
        <TouchableOpacity onPress={()=>console.log('進預約page')} style={styles.reservationBtn}>
          <Text style={styles.reservation}>預約</Text>
        </TouchableOpacity>
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
  },
  reservationBtn: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    shadowColor: Colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  reservation: {
    fontSize: 20,
    color: '#ccc'
  },
  titleContainer: {
    position: 'absolute',
    left: 24,
    bottom: 24
  },
  label: {
    fontSize: 38,
    color: '#fff',
    padding: 8,
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  price: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center'
  },
})

export default Home