import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Style/style";

const PlaceCard = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("PlaceDetails", {
      id: item.id,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.HomeSliderCardBody}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.HomeSliderCardCoverImage}
        />
        <View style={styles.HomeSliderCardTextContainer}>
          <Text style={styles.HomeSliderCardTitle}>{item.name}</Text>
          <Text style={styles.HomeSliderCardDescription}>
            {item.preDescription.split(" ").slice(0, 4).join(" ")}...
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceCard;
