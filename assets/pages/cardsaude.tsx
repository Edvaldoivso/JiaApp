import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  Vibration,
  View,
  Image,
  StyleSheet,
} from "react-native";

export default function Cardsaude() {
  let [valorPeso, setPeso] = useState(72);
  let [valorAltura, setAltura] = useState(1.71);
  let [valorIMC, setIMC] = useState();

  return (
    <Pressable
      style={styleapi.apicontainer}
      onLongPress={() => {
        Vibration.vibrate();

        alert("Saude em construcao");
      }}
      delayLongPress={300}
    >
      <View style={styleapi.Temperatura}>
        <Text style={styleapi.textitulo}>SAÚDE</Text>
        <Image
          source={require("../imagens/coração.png")}
          style={{ width: 50, height: 50 }}
        />
         <Text>{valorPeso} Kg</Text>
      </View>

      <View style={styleapi.Previsao}>
        <Text>😎 Sua saúde Hoje</Text>
        <Text>90 bPM</Text>
        <Text>{valorAltura} mt</Text>
        <Text>IMC: {valorPeso / (valorAltura * valorAltura)} </Text>
      </View>
    </Pressable>
  );
}

const styleapi = StyleSheet.create({
  apicontainer: {
    justifyContent: "flex-start",
    alignSelf: "auto",
    flexDirection: "row",
    height: 160,
    padding: 10,
    backgroundColor: "#9DCC9B",
    margin: 5,
    borderRadius: 7,
  },

  textitulo: {
    fontSize: 20,
    color: "#0B0B61",
  },

  texleitura: {
    fontSize: 16,
    color: "#000000",
    padding: 10,
  },

  cardtempo: {
    flexDirection: "row",
    backgroundColor: "grey",
    height: 160,
  },

  Temperatura: {
    height: 160,
    width: 100,
    color: "#00FFFF",
    padding: 2,
  },

  Previsao: {
    height: 160,
    color: "#ffffff",
    padding: 2,
  },
});
