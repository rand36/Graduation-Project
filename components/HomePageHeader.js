import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../assets/colors/colors";
import { styles } from "../Style/style";
import { Ionicons } from "@expo/vector-icons";
import HeaderCarousel from "./HeaderCarousel";
import { useNavigation } from "@react-navigation/native";
export default function HomePageHeader({ places }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.main,
        height: 240,
        borderBottomRightRadius: 65,
        borderBottomLeftRadius: 65,
      }}
    >
      <View
        style={[
          {
            flexDirection: "row",
            paddingVertical: 10,
            justifyContent: "space-between",
            alignItems: "center",
          },
          styles.containerWithPadding,
        ]}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
            fontWeight: "600",
            height: 40,
          }}
        >
          Discover
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 40,
            alignItems: "center",
          }}
        >
          <Ionicons name="search" size={30} color={COLORS.white} />
          <Pressable onPress={() => navigation.navigate("PlaceMap")}>
            <Ionicons name="location" size={30} color={COLORS.white} />
          </Pressable>
        </View>
      </View>
      <View>
        <HeaderCarousel places={places} />
      </View>
    </View>
  );
}
