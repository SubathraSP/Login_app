import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "./header";

type RootStackParamList = {
  Signin: undefined;
  Signup: undefined;
  Home: undefined;
};

type SignupNavigationProp = StackNavigationProp<RootStackParamList, "Signup">;

interface SignupProps {
  navigation: SignupNavigationProp;
}

export default function Signup({ navigation }: SignupProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (username === "" || password === "" || email === "") {
      Alert.alert("Required", "Please enter username, password and email.");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignup}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Have an Account?{" "}
        <Text style={styles.linkText} onPress={() => navigation.navigate("Signin")}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E1E1E",
    borderRadius: 25,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
    borderColor: "#333",
    borderWidth: 1,
  },
  signupButton: {
    backgroundColor: "#FF5733",
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 20,
  },
  linkText: {
    color: "#FF5733",
    fontWeight: "bold",
  },
});
