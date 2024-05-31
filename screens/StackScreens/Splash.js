import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../../Style/style";
import logo from "../../assets/images/logo-white.png";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("OnBoard");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.splashScreen}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.splashLogo} />
      </View>
    </View>
  );
};

export default Splash;
