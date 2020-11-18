import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.8 * height

function Slide(props) {
  const { label, right } = props

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50},
    { rotate: right ? "-90deg" : "90deg" }
  ]

  return(
    <View style={styles.container}>
      <TouchableOpacity style={[styles.titleContainer, { transform }]} onPRess={()=>console.log('hehe')}>
        <Text style={styles.title}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width
  },
  textContainer: {
    height: 100,
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: '#fff',
    textAlign: 'center',
  }
})

export default Slide