import React from "react";
import { Text, View,Image,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";
import { CardItem } from "../components/card";


export default function CheckLocal() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <Text style={styles.TexTitle}>Options </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.TexTitle}>Fazer Check ☝️</Text>

         <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      </View>

 <View style={styles.container}>
      <FlatList
      
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        //renderItem={({item}) => <Text style={styles.TexTitle}>{item.key}</Text>}
        renderItem={({ item })=><CardItem />}
numColumns={3}
         
      />
    </View>



    </SafeAreaView>
  );
}
