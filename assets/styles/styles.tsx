import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //SafeArea
  SafeArea: {
    flex: 1,
    backgroundColor: "#000000",
    padding:15,

  },

  //View

  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },

  //Style Buttons
  button:{
      padding: 10,
      backgroundColor:"#0A2A1B",
      height:40,
      width:80,
      color:"#01DF74",
      fontSize:15,
      borderBottomEndRadius:5
  },
  //Textos de Leitura

  TexLeitura: {
    fontSize: 20,
    color: "#ffffff",
  },

  //Textos de Titulo
  TexTitle: {
    fontSize: 25,
    color: "#01DF74",
  },

  //Textos de Alerta

  //Textos de Sucesso
});
