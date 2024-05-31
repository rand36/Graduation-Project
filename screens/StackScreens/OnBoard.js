import { View, Text, Image, Pressable } from "react-native";
import { styles, fonts } from "../../Style/style";
import React, { useEffect } from "react";
import logo from "../../assets/images/logo-color.png";
import onBoardLanding from "../../assets/images/onboard-landing.png";
import { useNavigation } from "@react-navigation/native";

const OnBoard = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.onBoardHeader}>
        <Image source={logo} style={styles.headerLogo} />
        <Text style={fonts.mainHeader}>A Journey through Time and Wonder</Text>
        <Text style={fonts.secondHeader}>
          Discover Places, Join with People and More
        </Text>
      </View>

      <View style={styles.onBoardBottom}>
        <Image source={onBoardLanding} style={styles.landingImage} />
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <View style={styles.bottonBlock}>
            <Text style={styles.bottonText}>Yalla Join Us!</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Tab")}>
          <Text style={styles.linkTextWhite}>Discover Without Create User</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoard;
