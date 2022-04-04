import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  View,
  Alert,
  AccessibilityInfo,
  
} from "react-native";

export function CardItem() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>Titulo</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
    borderRadius: 7,
  },
  text: {
    fontSize: 16,
    color: "#000000",
    padding: 10,
  },

  imagem: {
    height: 50,
    width: 50,
  },
});
