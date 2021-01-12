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
import Circle from './circle'
import Modal from 'react-native-modal';
import Colors from "../../styles/Colors";
import { ColorPropType } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

function GiftModal(props) {
  const { modalVisible, setModalVisible, changePeople } = props
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
            style={{ ...styles.openButton}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>隱藏</Text>

          </TouchableHighlight>
          <Circle changePeople={changePeople}/>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{color:'red',fontWeight: 'bold', marginBottom: 6}}>頭獎：Elixar包膜弦兌換券</Text>
            <Text style={{color:'red',fontWeight: 'bold', marginBottom: 6}}>二獎：點數40點</Text>
            <Text style={{color:'red',fontWeight: 'bold', marginBottom: 6}}>三獎：pick兌換券</Text>
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
    backgroundColor: Colors.primary,
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
    elevation: 2,
    marginVertical: 10,
    borderWidth:1,
    borderColor:'red'
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