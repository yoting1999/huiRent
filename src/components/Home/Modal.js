import React from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground, ScrollView } from 'react-native'
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Modal from 'react-native-modal';
import route from '../../constants/route';


function DetailModal(props) {
  const { isVisible, setIsVisible, roomData } = props

  const navigation = useNavigation()

  const closeModal = () => {
    setIsVisible(false)
  }

  const renderEqu = ({item}) => {
    return (
      <View style={styles.equItem}>
        <Text style={styles.equType}>{item.type}</Text>
        <View style={styles.equContainer}>
        {item.equipment.map((equ, index)=>{
          return (
            <View style={styles.equ} key={`equ-${index}`}>
              <Text>{equ}</Text>
            </View>
          )
        })}
        </View>
    </View>
    )
  }

  return (
    <Modal
      swipeDirection={['down']}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      isVisible={isVisible}
      style={styles.modalView}
      >
      <View style={styles.container}>
        <ImageBackground source={{uri: roomData.uri}} style={{flex: 1}}>
        <Text style={styles.title}>{roomData.name}</Text>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.price}>價錢 : {roomData.price} / h</Text>
          <FlatList
            keyExtractor={(item, index)=> `equ-block-${index+1}`}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal
            data={roomData.equipments}
            renderItem={renderEqu}
          />
          <View style={styles.footer}>
            <Button  block rounded onPress={()=>{
              setIsVisible(false)
              navigation.navigate(route.Reserve, { type: roomData.alians })
            }}>
              <Text style={styles.footerBtn}>我要預約</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: '#fff',
    flex: 0.8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  footerBtn: {
    fontSize: 18,
    color: '#fff'
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,.8)',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ccc'
  },
  price: {
    fontSize: 20,
    marginVertical: 16
  },
  equItem: {
    width: 180 ,
    height: 180,
    marginRight: 10,
    padding: 4,
    borderColor: '#ccc',
    borderWidth: 1
  },
  equType: {
    backgroundColor: '#ddd',
    padding: 4,
    textAlign: 'center'
  },
  equContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },
  equ: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 99,
    margin: 4,
    padding: 8
  }
})

export default DetailModal