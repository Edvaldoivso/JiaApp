import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";
import { CardItem } from "../components/card";

export default function CheckLocal() {
  return (
    <SafeAreaView style={styles.SafeArea}>
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
            { key: "Edvaldo" ,Item: "Ausente"},
            { key: "Fabiola", Item:"Presente"},
            { key: "Luciana" ,Item:"Presente"},
            { key: "Fabiana" ,Item: "Presente"},
            { key: "Edilson" ,Item :"Presente"},
          ]}
          //renderItem={({item}) => <Text style={styles.TexTitle}>{item.key}</Text>}
          renderItem={({ item }) => <CardItem title={item.key +'  '+item.Item} />}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
}
