import React, { useState } from 'react'
import { StatusBar, View, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../styles/Colors'
import route from '../../constants/route'

import Modal from '../Home/Modal'

const { width, height } = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.8 * height

function Slide(props) {

  const { data, bgImg } = props
  // const navigation = useNavigation()

  const [ isVisible, setIsVisible ] = useState(false)

  // const transform = [
  //   { translateY: (SLIDE_HEIGHT - 100) / 2 },
  //   { translateX: right ? width / 2 - 50 : -width / 2 + 50},
  //   { rotate: right ? "-90deg" : "90deg" }
  // ]

  return(
    <ImageBackground
      source={{uri: bgImg}}
      style={styles.container}>
      <View style={styles.filter}/>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity style={styles.moreBtn} onPress={()=>setIsVisible(true)}>
        <Text style={styles.more}>
          MORE
        </Text>
      </TouchableOpacity>
      <Modal
        roomData={data}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filter: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
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
  moreBtn: {
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  more :{
    fontSize: 26,
    color: '#fff'
  },
  titleContainer: {
    position: 'absolute',
    left: 24,
    bottom: 24
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: '#fff',
    textAlign: 'center',
  }
})

export default Slide