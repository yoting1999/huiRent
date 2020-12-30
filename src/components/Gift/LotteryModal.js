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

import Lottery from './Lottery'
import Circle from './circle'
import Modal from 'react-native-modal';

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

function GiftModal(props) {
  const { modalVisible, setModalVisible } = props
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}
      onBackdropPress={() => {
        setModalVisible(false)
      }}
      onSwipeComplete={() => {
        setModalVisible(false)
      }}


    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>隱藏</Text>

          </TouchableHighlight>
          <Circle></Circle>
            
            <Text style={{color:'red'}}>頭獎：Elixar包膜弦兌換券</Text>
            <Text style={{color:'red'}}>二獎：點數40點</Text>
            <Text style={{color:'red'}}>三獎：pick兌換券</Text>
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
    backgroundColor: "skyblue",
    borderRadius: 20,
    width: width,
    height: height*0.8,
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
    backgroundColor: "#F194FF",
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