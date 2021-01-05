import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  Image
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import Modal from 'react-native-modal';



let width=Dimensions.get("window").width;
let height=Dimensions.get("window").height*0.3;

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function GiftModal(props) {
    const { GiftModalVisible, setGiftModalVisible,data,userInfo,updateCoupon} = props
    let leftpoint = userInfo.AllPoint

    function Giftcostpoint(Giftdata){

      if(leftpoint >= data.costpoint){ // 確認點數足夠
        const useddata = {'name':Giftdata.name,'costpoint':Giftdata.costpoint,'couponid':Giftdata.couponid,'time':new Date().toISOString()}
        Giftdata = {...Giftdata, status: 'UNDONE', cid: uuidv4()}
        updateCoupon(Giftdata,useddata,Giftdata.costpoint)
        Alert.alert('兌換成功','請至MyCoupon查看')
      }
      else
      Alert.alert('點數不足!!')
    }

    function closeModal() {
      setGiftModalVisible(false)
    }
  return (
      <Modal
        swipeDirection={['down']}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        isVisible={GiftModalVisible}
        onRequestClose={closeModal}
        // style={styles.modalView}
      >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <View style={{ paddingTop: 20 }}>
              <Text style={styles.modalText}>{data.name}</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>需要點數： {data.costpoint}</Text>
              <Text>{data.des}</Text>
              </View>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={closeModal}
              >
              <Text style={styles.textStyle}>取消</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                Giftcostpoint(data)
              }}
            >
              <Text style={styles.textStyle}>兌換</Text>

            </TouchableHighlight>
            </View>
          </View>
      </Modal>


  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
    flex:3,
    marginHorizontal: 50,
    height:100,
  },
  container: {
    borderRadius:10,
    backgroundColor: '#fff',
    flex: 0.25,
    padding: 10,
    borderRadius: 6,
  },
  openButton: {
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 6,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    paddingBottom: 8
  }
});

export default GiftModal;