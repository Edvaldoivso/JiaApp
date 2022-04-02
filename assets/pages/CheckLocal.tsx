import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";

export default function CheckLocal() {
  return (

    <SafeAreaView style={styles.SafeArea}>

    <View style={styles.container}>
      <Text style={styles.TexTitle}>Options</Text>
    </View>

    <Text>
    Olá
    </Text>

    <View style={styles.container}>
      <Text style={styles.TexTitle}>Fazer Check ☝️</Text>
    </View>
    
    </SafeAreaView>
    










  );
}
