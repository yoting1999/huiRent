import React, { useState } from 'react'
import { View, StyleSheet, Dimensions,Text, TouchableOpacity, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import {useNavigation} from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay';

import Slide, { SLIDE_HEIGHT } from '../UI/Slide'
import routeConfig from '../../constants/route'
import { ROOMS } from '../../constants/rooms'
import Colors from '../../styles/Colors'
import route from '../../constants/route'

const { width } = Dimensions.get("window")


function isManager(userInfo) {
  return userInfo.position === 'manager'
}

function Home(props) {
  const navigation = useNavigation();
  const { isLoading, userInfo } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index)
  }

  console.log('userInfo', userInfo)

  return (
    <View style={styles.container}>
      {userInfo && isManager(userInfo) &&
        <Icon
          onPress={()=>navigation.navigate(route.scanner)}
          type="FontAwesome"
          name="qrcode"
          style={styles.qrcode}
        />
      }
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
          { ROOMS && ROOMS.map((item, index)=> {
            return <Slide data={item} bgImg={item.uri} key={`room-${index+1}`} />
          }) }

        </ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.label}>{ ROOMS[currentIndex].name }</Text>
          <Text style={styles.price}>$ { ROOMS[currentIndex].price } / h</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate(routeConfig.Reserve)} style={styles.reservationBtn}>
          <Text style={styles.reservation}>預約</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.footer}>
          <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0, .9)'}} />
          <View style={{ flex: 1,backgroundColor: '#fff', borderTopLeftRadius: 75}}>
          <Text style={{ fontSize: 50, padding: 10 }}>TEST : {userInfo && userInfo.name}</Text>
          <Text style={styles.brand}>©2020 HUIRENT</Text>
        </View>
      </View>
      <Spinner visible={isLoading}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
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
    color: Colors.secondary,
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
  qrcode: {
    position: 'absolute',
    right: 10 ,
    top: StatusBar.currentHeight || 50,
    color: '#fff', zIndex: 99
  }
})

export default Home