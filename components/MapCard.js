import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const CARD_WIDTH = Dimensions.get("window").width * 0.8;
const CARD_HEIGHT = 200;
const MapCard = ({ place }) => {
  const navigation = useNavigation();

  const handlePress = (e) => {
    navigation.navigate("PlaceDetails", {
      id: place.id,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={innerStyle.card}>
        <Image
          source={{ uri: place.imageUrl }}
          style={{ width: "100%", height: 160 }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: COLORS.main,
              fontSize: 22,
              fontWeight: "500",
            }}
          >
            {place.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MapCard;

const innerStyle = StyleSheet.create({
  card: {
    elevation: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
});
