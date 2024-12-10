import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./signup";
import Home from "./home";
import Signin from "./signin";
import ForgotPasswordScreen from "./forgotpassword";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
