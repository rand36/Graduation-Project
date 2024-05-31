// import { StatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <Navigation />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
