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

let width=Dimensions.get("window").width;
let height=Dimensions.get("window").height;

function GiftModal(props) {
    const { modalVisible, setModalVisible} = props

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }
        
    }
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
              <Text style={styles.textStyle}>Hide Modal</Text>
              
            </TouchableHighlight>
            <Image  resizeMode={"center"} style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', width:300, height:100, backgroundColor:'transparent'}} source={{ uri: 'http://lorempixel.com/1920/1920/cats' }}/>

            
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