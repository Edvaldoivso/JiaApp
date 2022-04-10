import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  PressableProps,
  Pressable,
  Image,
} from "react-native";

interface ButtonProps extends PressableProps  {
  title: string;
  imagem: any;
 
}

//FUNÇÃO DE AUTENTICAR
export default function Botao({ title, ...rest }: ButtonProps) {
  return (

      
     <Pressable style={botao.botao} {...rest}>    
      <Text style={botao.titulos}>{title}</Text>

   
     

    </Pressable>
    
  );
}

const botao = StyleSheet.create({
  titulos: {
    fontSize: 30,
    textAlign:"center",
  },

  botao: {
   height:100, 
    borderRadius: 10,
    backgroundColor: "#9DCC9B",  
    justifyContent: "space-evenly",
    margin:5,
  },
});
