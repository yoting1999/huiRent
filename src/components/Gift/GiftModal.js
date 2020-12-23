import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  Image
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


let width=Dimensions.get("window").width;
let height=Dimensions.get("window").height*0.3;

function GiftModal(props) {
    const { GiftModalVisible, setGiftModalVisible,data,userInfo} = props
    let leftpoint = userInfo.GotPoint-userInfo.UsedPoint
    console.log('on GiftModal props:',props)
    function Giftcostpoint(){
      if(leftpoint > data.costpoint)
      alert('兌換成功')
      else
      alert('點數不足!!')
    }
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={GiftModalVisible}
        onRequestClose={() => {
          setGiftModalVisible(false)
        }
        
    }
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flex:3}}>
            <Text style={styles.modalText}>已選擇商品：{data.name}</Text>
            <Text>需要點數：{data.costpoint}</Text>
            <Text>{data.des}</Text>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
              <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setGiftModalVisible(!GiftModalVisible);
              }}
            >
              <Text style={styles.textStyle}>取消</Text>
      
            </TouchableHighlight>   
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                Giftcostpoint()
              }}
            >
              <Text style={styles.textStyle}>兌換</Text>
      
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width:width,
    height:height,
    // padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    elevation: 2
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