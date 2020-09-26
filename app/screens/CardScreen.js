import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import color from "../config/color";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function CardScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="email" size={80} style={styles.iconStyle} />
      <View style={styles.background}>
        <View style={styles.primaryBox}></View>
      </View>
      <View style={styles.secondaryBox}></View>
      <Text style={styles.textStyle}>Lets play with some styles</Text>
    </View>
  );
}
Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
const styles = StyleSheet.create({
  background: {
    backgroundColor: color.secondary,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: color.primary,
    borderRadius: 30,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconStyle: {
    color: color.accent,
  },
  secondaryBox: {
    backgroundColor: color.accent,
    width: 100,
    height: 100,
    margin: 20,
    borderWidth: 10,
    borderColor: color.primary,
    borderRadius: 35,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 30,
  },
  primaryBox: {
    backgroundColor: color.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textStyle: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    color: color.accent,
  },
});
