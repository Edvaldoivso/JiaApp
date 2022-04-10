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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./assets/pages/Jiahome";
import CheckLocal from "./assets/pages/CheckLocal";
import Menus from "./assets/pages/Menus";
import Cardsaude from "./assets/pages/cardsaude";
import CalendarioPlantil from "./assets/pages/calendarioPlantil";
import ListaCompras from "./assets/pages/ListaCompras";
import Felis from "./assets/pages/Felis";
import Canis from "./assets/pages/Canis";
import ArmazenarComida from "./assets/pages/ArmazenarComida";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Saude from "./assets/pages/Saude";


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

      <Pressable
        style={Loginstyle.botao}
        onPress={() =>
          navigation.navigate("Home", { nome: "Edvaldo", numero: "555" })
        }
      >
        <Text>AUTENTICAR</Text>
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

        <Stack.Screen
          name="MENU"
          component={Menus}
          options={{
            title: "OPÇÕES",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

     <Stack.Screen
          name="Saude"
          component={Saude}
          options={{
            title: "OPÇÕES",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

           <Stack.Screen
          name="CalendarioPlantil"
          component={CalendarioPlantil}
          options={{
            title: "PLANTAS",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

           <Stack.Screen
          name="ListaCompras"
          component={ListaCompras}
          options={{
            title: "LISTA DE COMPRAS",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

   <Stack.Screen
          name="Felis"
          component={Felis}
          options={{
            title: "Gatos",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

        <Stack.Screen
          name="Canis"
          component={Canis}
          options={{
            title: "Caes",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#ffffff",
          }}
        />

           <Stack.Screen
          name="ArmazenarComida"
          component={ArmazenarComida}
          options={{
            title: "ARMAZENAR COMIDA",
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
    backgroundColor: "#9DCC9B",
    minWidth: 300,
    color: "#000000",
    fontSize: 25,
    padding: 3,
  },

  imagens: {
    borderRadius: 10,
  },

  Logo: {
    alignItems: "center",
  },
  titulos: {
    fontSize: 30,
  },

  botao: {
    minHeight: 20,
    maxHeight: 40,
    minWidth: 150,
    maxWidth: 200,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2A836B",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
