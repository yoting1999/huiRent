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
let height=Dimensions.get("window").height*0.3;

function GiftModal(props) {
    const { GiftModalVisible, setGiftModalVisible,data} = props

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
            <Text style={styles.modalText}>{data}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setGiftModalVisible(!GiftModalVisible);
              }}
            >
              <Text style={styles.textStyle}>隱藏</Text>
            </TouchableHighlight>   
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