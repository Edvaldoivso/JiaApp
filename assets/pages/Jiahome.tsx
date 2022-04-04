import React from "react";
import {SectionList, View, Text, SafeAreaView, Button, ScrollView , FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { CardItem } from "../components/card";


export function Home({ navigation }) {
  //Entendimento do useEffect

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.listacontainer}>
        <ScrollView style={styles.listas} horizontal={true}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </ScrollView>

        <Button
          title="Check-in "
          onPress={() => navigation.navigate("CheckLocal", {})}
        />

        <View style={styles.listaNotify}>
          <Text style={styles.TexTitle}>NOTIFICAÇÕES</Text>
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
      </View>
    </SafeAreaView>
  );
}
