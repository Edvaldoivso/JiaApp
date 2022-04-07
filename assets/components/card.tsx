import React, { Component } from "react";
import { Vibration } from "react-native";
import { Text, StyleSheet, View, Pressable } from "react-native";

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
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <Text>EM USO</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerscroll: {
    height: 130,
    width:200,
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

  cardacao:{
    alignItems:"center"
  },

 
});
