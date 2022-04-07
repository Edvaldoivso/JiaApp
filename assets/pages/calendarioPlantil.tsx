import React from "react";
import { Text , Pressable, Vibration, View ,Image ,StyleSheet } from "react-native";


export default function CalendarioPlantil(){

  return (
    <Pressable
      style={styleapi.apicontainer}
      onLongPress={() => {
        Vibration.vibrate();
        
     
      }}
      delayLongPress={300}
    >


      <View style={styleapi.Temperatura}>
        <Text style={styleapi.textitulo}>Plantas</Text>
     
      </View>



      <View style={styleapi.Previsao}>
      
        <Text>Plantil Recomendado</Text>
        <Text>Colheita recomendada </Text>
         <Text>Saude das Plantas</Text>
       
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

