import React from "react";
import { Vibration, Text, StyleSheet, View, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


let valr = false;
export function CardItem({ title }) {
  return (
    <Pressable
      style={styles.containerscroll}
      onLongPress={() => {
        valr = !valr;
        alert("Selecionado  " + valr);
        Vibration.vibrate();
      }}
      delayLongPress={400}
    >
      <View style={styles.cardacao}>
        <View>
          <BouncyCheckbox
            unfillColor="#D5E4CF"
            fillColor="#2A836B"
            text={title}
            textStyle={styles.text}
            onPress={(isChecked = true) => {
              if (isChecked == true) alert("Menus Uma !");
            }}
          />
        </View>
        <View>
    
         
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerscroll: {
    height: 90,
    width: 200,
    alignItems: "center",
    backgroundColor: "#9DCC9B",
    padding: 10,
    margin: 5,
    borderRadius: 7,
  },

  text: {
    fontSize: 17,
    color: "#000000",
    padding: 10,
  },

  cardacao: {
    alignItems: "center",
  },

});
