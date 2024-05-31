import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const HomeCard = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("PlaceDetails", {
      id: item.id,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          backgroundColor: COLORS.white,
          width: 220,
          height: 170,
          marginRight: 20,
          borderRadius: 10,
          alignItems: "center",
          paddingBottom: 5,
          marginLeft: 30,
          marginRight: -10,
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            height: "75%",
            width: "100%",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            objectFit: "fill",
          }}
        />
        <Text
          style={{
            color: COLORS.main,
            fontWeight: "600",
            fontSize: 20,
            textTransform: "capitalize",
          }}
        >
          {item.name}
        </Text>
        <Text style={{ paddingHorizontal: 5, textAlign: "center" }}>
          {item.preDescription}
        </Text>
      </View>
    </Pressable>
  );
};

export default HomeCard;
