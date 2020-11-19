import React from 'react'
import { StatusBar, View, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../styles/Colors'
import route from '../../constants/route'
const { width, height } = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.8 * height


function Slide(props) {

  const { label, right, bgImg, price } = props
  const navigation = useNavigation()

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50},
    { rotate: right ? "-90deg" : "90deg" }
  ]

  return(
    <ImageBackground
      source={{uri: bgImg}}
      // imageStyle={{ borderBottomRightRadius: 75 }}
      style={styles.container}>
      <View style={styles.filter}/>
      {/* <TouchableOpacity style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </TouchableOpacity> */}

      <StatusBar barStyle="light-content" />

      <TouchableOpacity style={styles.moreBtn} onPress={()=>navigation.navigate(route.roomDetail)}>
        <Text style={styles.more}>
          MORE
        </Text>
      </TouchableOpacity>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.label}>{ label }</Text>
          <Text style={styles.price}>$ { price } / h</Text>
        </View> */}
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
    backgroundColor: 'rgba(0,0,0,.8)',
    // borderBottomRightRadius: 75
  },
  label: {
    fontSize: 38,
    color: '#fff',
    // backgroundColor: '#fff',
    padding: 8,
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    // opacity: 0.3,
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
  // textContainer: {
  //   height: 100,
  //   justifyContent: 'center'
  // },
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