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
} from "react-native";
import { styles } from "./assets/styles/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./assets/pages/Jiahome";
import CheckLocal from "./assets/pages/CheckLocal";




//Import Dep.
const Stack = createNativeStackNavigator();

//FUNÇÃO DE AUTENTICAR

function Autentication({ navigation }) {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imagens}
            source={require("./assets/imagens/LogoJia.jpg")}
          />
        </View>
      </View>

      <TextInput
        style={styles.TexArea}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Button title="AUTENTICAR" onPress={() => navigation.navigate("Home", 
           { nome:"Edvaldo" , numero:'555'}
      
      
      )} />
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
