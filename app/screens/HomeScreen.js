import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        scource={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            styles={styles.logo}
            scource={require("../assets/logo-red.png")}
          ></Image>
          <Text>Template lorem ipsum</Text>
        </View>
        <View style={styles.loginBtn}></View>
        <View style={styles.signUpBtn}></View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#d4d4d4",
  },
  signUpBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#3ed",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
