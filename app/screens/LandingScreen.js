import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/color";
export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.dissmiss}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Landingpic.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    right: 25,
  },
  dissmiss: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    left: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
