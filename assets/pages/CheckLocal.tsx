import React from "react";
import { Text, View, Image, FlatList,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";


export default function CheckLocal() {
  return (
    <SafeAreaView style={styleCheck.containe}>
        
      <View>
     <Text>Em construcao</Text>
      </View>
    </SafeAreaView>
  );
}



const styleCheck = StyleSheet.create({

 containe: {
    flex: 1,
    padding: 5,
    backgroundColor: "#D5E4CF",
  },

})