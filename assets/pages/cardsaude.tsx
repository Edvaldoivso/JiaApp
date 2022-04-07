import React from "react";
import { Text ,SafeAreaView, Pressable, Vibration, View ,Image ,StyleSheet } from "react-native";


export default function Cardsaude(){

  return (
    <Pressable
      style={styleapi.apicontainer}
      onLongPress={() => {
        Vibration.vibrate();
      
        alert(
          "Adcionando as plantas"
        );
      }}
      delayLongPress={300}
    >


      <View style={styleapi.Temperatura}>
        <Text style={styleapi.textitulo}>SAÚDE</Text>
     
      </View>



      <View style={styleapi.Previsao}>
      
        <Text>BATIMENTOS</Text>
        <Text>PRESSÃO</Text>
        <Text>ALTURA</Text>
         <Text>PESO</Text>
         <Text>IMC</Text>
       
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
    width:100,
    color: "#00FFFF",
    padding: 2,
  },

  Previsao: {
    height: 160,
    color: "#ffffff",
    padding: 2,
  },
});

