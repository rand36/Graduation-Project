import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "../Style/style";
import { useNavigation } from "@react-navigation/native";

const EventCardSlider = ({ event }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("SomeOneProfile", {
      id: event.user.id,
    });
  };
  return (
    <View style={styles.HomeSliderCardBody}>
      <Pressable onPress={handlePress} style={styles.UserSmallImageContainer}>
        <Image
          source={{ uri: event.user.imageUrl }}
          style={styles.UserSmallImage}
        />
      </Pressable>
      <Image
        source={{ uri: event.coverImageUrl }}
        style={styles.HomeSliderCardCoverImage}
      />
      <View style={styles.HomeSliderCardTextContainer}>
        <Text style={styles.HomeSliderCardTitle}>{event.title}</Text>
      </View>
    </View>
  );
};

export default EventCardSlider;
