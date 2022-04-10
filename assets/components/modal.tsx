import React, { useState } from "react";
import { Modal, Text, View, Alert, Pressable , StyleSheet} from "react-native";



export default function modal({ text, subject }) {

const [modalVisible, setModalVisible] = useState(false);



  return (
    <View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("modal foi fechado");
          setModalVisible(!modalVisible);
        }}
      >


      
       <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>{subject}</Text>
            <Text style={styles.modalText} >{text}</Text>

    <Pressable
    onPress={()=>{setModalVisible(!modalVisible)}}>
    <Text>❌</Text>
    </Pressable>

          </View>
        </View>
      </Modal>

 <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>➕</Text>
      </Pressable>




    </View>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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