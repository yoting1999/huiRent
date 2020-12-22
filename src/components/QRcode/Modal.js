import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay'
import Modal from 'react-native-modal';
import { ALIANS, ROOMS, TIME } from '../../constants/rooms';
import Colors from '../../styles/Colors'

function ReserveModal(props) {
  const {
    isVisible,
    setIsVisible,
    data,
    ordererData,
    ordererId,
    isLoading,
    finishTheReserve,
    scannedValue,
    addPoint
  } = props

  const closeModal = () => {
    setIsVisible(false)
  }

  const tagToTime = (tag) => {
    const time = TIME.find((item)=>item.tag === tag).time
    return <View style={styles.tag}><Text>{time}</Text></View>
  }

  const handleSubmit = () => {
    Alert.alert(
      "完成此次租借",
      "如完成請管理者按下完成按鈕",
      [
        {
          text: "取消",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        // 改變訂單狀態
        // 給租借者點數
        { text: "完成", onPress: async () => {
          await finishTheReserve(scannedValue)
          const findTheRoom = ROOMS.find(room=>room.alians === data.room)
          const ordererPrevPoints = ordererData.GotPoint
          const gotPointData = {
            type: data.room,
            points: findTheRoom.points* data.time.length,
            time: new Date()
          }
          const newPointsData = [...ordererPrevPoints, gotPointData]
          const status = await addPoint(data.userId, ordererId, newPointsData)
          if(status === 200) setIsVisible(false)
        } }
      ],
      { cancelable: false }
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
        <View style={styles.content}>
          <View style={styles.block}>
            <Text style={styles.label}>租借人資訊</Text>
            <Text style={styles.text}><Text style={{ fontSize: 16 }}>租借人</Text>{ ordererData && ordererData.name}</Text>
            <Text style={styles.text}><Text style={{ fontSize: 16 }}>信箱</Text>{ ordererData && ordererData.email}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.label}>租借資訊</Text>
            <Text style={styles.text}>{ data && ALIANS[data.room]}</Text>
            <Text style={styles.text}>日期{ data && data.date}</Text>
            <Text style={styles.text}>時段{ data && data.time.map(t=>tagToTime(t))}</Text>
          </View>
          <View style={styles.footer}>
            <Button  block rounded onPress={handleSubmit} >
              <Text style={styles.footerBtn}>完成</Text>
            </Button>
          </View>
        </View>
      </View>
      <Spinner isVisible={isLoading}/>
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
    flex: 0.5,
  },
  content: {
    flex: 1,
    paddingVertical: 12,
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
  text: {
    fontSize: 20,
    marginVertical: 16
  },
  block: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 6,
    position:'relative',
    marginBottom: 12
  },
  label: {
    position: 'absolute',
    top: -6,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 6
  },
  tag: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 99,
    alignItems: 'center',
  }
})

export default ReserveModal