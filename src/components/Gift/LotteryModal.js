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

import Lottery from './Lottery'
import Circle from './circle'

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
          <Text style={styles.modalText}>開發中請見諒！</Text>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>隱藏</Text>

          </TouchableHighlight>
          <Circle></Circle>


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