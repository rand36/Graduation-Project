import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../Style/style";
import { useNavigation } from "@react-navigation/native";

const SliderHeader = ({ title, toWhere }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (toWhere) {
      navigation.navigate(toWhere);
    }
  };
  return (
    <View style={styles.sliderHeaderContainer}>
      <Text style={styles.sliderHeaderTitle}>{title}</Text>
      <Pressable onPress={handlePress}>
        <Text style={styles.sliderHeaderButton}>see more</Text>
      </Pressable>
    </View>
  );
};

export default SliderHeader;
