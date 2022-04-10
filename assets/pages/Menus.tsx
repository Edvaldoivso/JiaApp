import React from "react";
import {
  Vibration,
  Text,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Botao from "../components/botao";

export default function Menus({ navigation }) {
  return (
    <SafeAreaView style={styleCheck.containe}>
      

      
      <Botao
            title={"Saúde"}
            onPress={() => {
            navigation.navigate("Saude");
            }}
          ></Botao>
  
         




          <Botao
            title={"Calendário de Plantil"}
            onPress={() => {
              navigation.navigate("CalendarioPlantil");
            }}
          ></Botao>

          <Botao
            title={"Lista de Compras"}
            onPress={() => {
              navigation.navigate("ListaCompras");
            }}
          ></Botao>
          
          <Botao
            title={"Gatos"}
            onPress={() => {
              navigation.navigate("Felis");
            }}
          ></Botao>

          <Botao
            title={"Cães"}
            onPress={() => {
              navigation.navigate("Canis");
            }}
          ></Botao>
          
          <Botao
            title={"Armazenar Comida"}
            onPress={() => {
              navigation.navigate("ArmazenarComida");
            }}
          ></Botao>

        
    
    </SafeAreaView>
  
  )}



const styleCheck = StyleSheet.create({
  containe: {
    flex: 1,
    padding: 10,
    backgroundColor: "#D5E4CF",
  },
});
