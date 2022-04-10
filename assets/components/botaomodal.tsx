import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Touchable,
  Pressable,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//FUNÇÃO DE AUTENTICAR
export default function BotaoPadrao({ title, funcao }) {
  const [estadomodal, setEstadoModal] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={estadomodal}
        onRequestClose={() => {
          setEstadoModal(!estadomodal);
        }}
      >
        <View style={botao.centeredView}>
          <View style={botao.modalView}>
            <ScrollView>
              
           
            </ScrollView>
            <Pressable
              onPress={() => {
                setEstadoModal(!estadomodal);
              }}
            >
              <Text style={botao.botaofechar}>fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={botao.botao}
        onPress={() => {
          {
            setEstadoModal(!estadomodal);
          }
        }}
      >
        <Text style={botao.titulos}> {title}</Text>
      </Pressable>
    </View>
  );
}

const botao = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#D5E4CF",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    minWidth:300,
    minHeight: 400,
    maxHeight:500,
    backgroundColor: "#D5E4CF",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  titulos: {
    fontSize: 15,
  },

  botao: {
    minHeight: 40,
    maxHeight: 60,
    minWidth: 150,
    maxWidth: 200,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2A836B",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  botaofechar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2A836B",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 30,
    borderRadius: 10,
    padding: 5,
  },
});
