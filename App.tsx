import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Button, StyleSheet, Text, View } from "react-native";
import { styles } from "./assets/styles/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from "./assets/pages/home"



//Import Dep.
const Stack = createNativeStackNavigator();



//FUNÇÃO DE AUTENTICAR

function Autentication( { navigation } ){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
      title="AUTENTICAR"
       onPress={() => navigation.navigate('Home')} />
    </View>
  );
}



//Função Cria as Stack Pages

function JiaStack(){

  return(
    <Stack.Navigator>
    <Stack.Screen name="Faca Login" component={Autentication}
    />  
    <Stack.Screen name="Home" component={Home}
    />    
    </Stack.Navigator>
  )
}





export default function App() {
  //Retorna a Stack Navigation
  return(
    <NavigationContainer>
    < JiaStack />
    </NavigationContainer>




  )


  }




