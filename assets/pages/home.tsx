import React from "react";
import { View, SafeAreaView, Text, Button } from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "../styles/styles";



export function Home(  { navigation } ) {
 
  return (
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.container}>
          <Text style={styles.TexTitle}> Bem vindo ao Novo JIA </Text>
          <Text style={styles.TexLeitura}>Bem vindo ao JiaApp</Text>
         
        </View>

         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>

       
      </SafeAreaView>
    );







}
