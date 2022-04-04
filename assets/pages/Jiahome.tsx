import React, { useState } from "react";
import {
  SectionList,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { CardItem } from "../components/card";

export function Home({ navigation, route }) {
  //Entendimento do useEffect

let [luz , setState]=useState(false)
let [icon , setStateIcon]=useState()

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.listacontainer}>
        <Text style={styles.TexTitle}>Jia 🤖 Altomação</Text>
        <ScrollView style={styles.listas} horizontal={true}>

          <CardItem title={"LUZ CORREDOR"}/>
          <CardItem title={"LUZ ESCADA "} />
          <CardItem title={"LUZ SALA "} />
          <CardItem title={"LUZ QUARTO "} />
          <CardItem title={"LUZ BANHEIRO "} />
          <CardItem title={"LUZ COZINHA "} />
          <CardItem title={"LUZ TRAZ "} />
        </ScrollView>

        <Button
          title="Check-in "
          onPress={() => navigation.navigate("CheckLocal")}
        />

        <View style={styles.listaNotify}>
          <Text style={styles.TexTitle}>
            Olá {route.params?.nome} o que temos para hoje a seguir.
          </Text>
          <FlatList
            data={[
              { key: "Previsão do Tempo" },
              { key: "Controle de Regas" },
              { key: "Contas Residenciais" },
              { key: "Lista de Compras" },
              { key: "Transporte" },
              { key: "Criar Aviso" },
              { key: "Traduzir Canis" },
              { key: "Traduzir Catus" },
              { key: "Traduzir Amazona" },
              { key: "Calendario Plantil" },
              { key: "Diagnósticos de Saude" },
              { key: "Cameras" },
            ]}
            //renderItem={({item}) => <Text style={styles.TexTitle}>{item.key}</Text>}
            renderItem={({ item }) => (
              <CardItem title={item.key} link={"Text"} />
            )}
            numColumns={3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
