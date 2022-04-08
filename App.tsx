import React from "react";
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
} from "react-native";
import { styles } from "./assets/styles/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./assets/pages/Jiahome";
import CheckLocal from "./assets/pages/CheckLocal";
import { TouchableOpacity } from "react-native-gesture-handler";

//Import Dep.
const Stack = createNativeStackNavigator();

//FUNÇÃO DE AUTENTICAR

function Autentication({ navigation }) {
  return (
    <SafeAreaView style={Loginstyle.SafeArea}>
      <View style={Loginstyle.Logo}>
        <Image
          style={Loginstyle.imagens}
          source={require("./assets/imagens/icon.png")}
        />
      <Text style={Loginstyle.titulos}>JIA app Gestão</Text>

      </View>

      <TextInput
        style={Loginstyle.TexArea}
        placeholder="Coloque sua senha"
        keyboardType="numeric"
      />

<Pressable style={Loginstyle.botao}
   onPress={ ()=>navigation.navigate("Home", { nome: "Edvaldo", numero: "555" })}
>

<Text>
 AUTENTICAR
</Text>
</Pressable>


      
    </SafeAreaView>
  );
}

export default function App() {
  //Retorna a Stack Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Autentication}
          options={{
            title: "Faca o Login",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "#f0f0f0",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "VOLTAR",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

        <Stack.Screen
          name="CheckLocal"
          component={CheckLocal}
          options={{
            title: "VOLTAR",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Loginstyle = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#D5E4CF",
    justifyContent: "space-evenly",
    alignItems: "center",
    
  },

  TexArea: {
    backgroundColor:"#9DCC9B",
    minWidth:300,
    color:"#000000",
    fontSize:25,
    padding:3,
  },

  imagens: {
    borderRadius:10,
  },

  Logo:{
  
    alignItems: "center",
  },
  titulos:{
    fontSize:30,
  },

    botao: {
    
    minHeight: 20,
    maxHeight: 40,
    minWidth:150,
    maxWidth:200,
    borderRadius:10,
    flex: 1,
    flexDirection: "row",
    backgroundColor:"#2A836B",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

});
