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

function GiftModal(props) {
    const { GiftModalVisible, setGiftModalVisible,data,userInfo,updateCoupon} = props
    let leftpoint = userInfo.GotPoint-userInfo.UsedPoint

    function Giftcostpoint(Giftdata){
      if(leftpoint >= data.costpoint){
        // 危險
      // const useddata = {'name':Giftdata.name,'costpoint':Giftdata.costpoint,'couponid':Giftdata.couponid,'time':new Date().toISOString()}
      // updateCoupon(Giftdata,useddata)
      alert('兌換成功')
      }
      else
      alert('點數不足!!')
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
              <Text style={styles.modalText}>已選擇商品：{data.name}</Text>
              <Text>需要點數：{data.costpoint}</Text>
              <Text>{data.des}</Text>
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
    // width:0.5,
    // justifyContent: 'center'
  },
  container: {
    borderRadius:10,
    backgroundColor: '#fff',
    flex: 0.5,
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
    textAlign: "center"
  }
});

export default GiftModal;