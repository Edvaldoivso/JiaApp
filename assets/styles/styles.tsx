import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //SafeArea
  SafeArea: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 15,
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
  button: {
    padding: 10,
    backgroundColor: "#0A2A1B",
    height: 40,
    width: 80,
    color: "#01DF74",
    fontSize: 15,
    borderRadius: 5,
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

  //TextArea
  TexArea: {
    color: "#01DF74",
    borderColor: "#01DF74",
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    paddingBottom: 10,
    marginBottom: 190,
  },

  //Imagens

  imagens: {
    backgroundColor: "#ffffff",
    height: 270,
    width: 250,
  },

  listas: {
    padding: 10,
    backgroundColor: "#ffffff",
    height: 50,
  },

  listacontainer: {
    flex: 1,
    height: 190,
  },

  listaNotify: {
    height: 600,
  },


});
