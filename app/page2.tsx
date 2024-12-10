import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/pic2_img.jpg")} 
        style={styles.image}
      />
      <Text style={styles.title}>Build Your Mind</Text>
      <Text style={styles.subtitle}>and Body</Text>
      <Text style={styles.subtitle1}>Be an Inspiration</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#000",
     
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 20, 
    borderRadius: 100, 
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff", 
    textAlign: "center",
    marginBottom: 10, 
    paddingTop:70,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff", 
    textAlign: "center",
    marginBottom: 5, 
  },
  subtitle1: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff", 
    textAlign: "center",
    fontStyle: "italic", 
  },
});