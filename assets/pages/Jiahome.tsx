import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { CardItem } from "../components/card";
import APIwheter from "../API/wheter";
import CalendarioPlantil from "../pages/calendarioPlantil";
import Cardsaude from "../pages/cardsaude";



export function Home({ navigation, route }) {
  //Entendimento do useEffect

  let [luz, setState] = useState(false);
  let [icon, setStateIcon] = useState();

  return (
    <SafeAreaView style={HomeStyle.containe}>
      <View style={HomeStyle.cabecalho}>
        <Text>Tarefas de Hoje 📝</Text>
      </View>

      <View style={HomeStyle.listascroll}>
        <ScrollView horizontal={true}>
          <CardItem title={"LUZ CORREDOR"} />
          <CardItem title={"LUZ ESCADA "} />
          <CardItem title={"LUZ SALA "} />
          <CardItem title={"LUZ QUARTO "} />
          <CardItem title={"LUZ BANHEIRO "} />
          <CardItem title={"LUZ COZINHA "} />
          <CardItem title={"LUZ TRAZ 4"} />
        </ScrollView>
      </View>
      
      <View style={HomeStyle.viewbutton}>
      
        <Pressable style={HomeStyle.estilobotao} 
        onPress={() => navigation.navigate("MENU")}
        >
          <Text style={HomeStyle.textoTitulo}>➕Jia</Text>
        </Pressable>

        <Pressable
          style={HomeStyle.estilobotao}
          onPress={() => navigation.navigate("CheckLocal")}
        >
          <Text style={HomeStyle.textoTitulo}>☝️ Check-in</Text>
        </Pressable>
      </View>

      <View>
        <ScrollView>
          <APIwheter />
          <Cardsaude />
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const HomeStyle = StyleSheet.create({
  cabecalho: {
    alignContent: "center",
    alignItems: "center",
  },

  containe: {
    flex: 1,
    padding: 5,
    backgroundColor: "#D5E4CF",
  },

  listascroll: {
    height: 100,
  },

  viewbutton: {
    padding: 10,
    minHeight: 100,
    maxHeight: 80,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  estilobotao: {
    padding: 10,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    minWidth: 180,
    maxWidth: 200,
    minHeight: 50,
    backgroundColor: "#2A836B",
    borderRadius: 5,
  },
  textoTitulo:{
     fontSize: 25,
    textAlign:"center",
  }
});
