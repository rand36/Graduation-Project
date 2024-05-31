import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const CreatedEventCard = ({ event }) => {
  const navigation = useNavigation();
  const dateString = event.startDate;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate() - 1).padStart(2, "0");

  const formattedDate = `${year}/${month}/${day}`;

  const handlePress = () => {
    navigation.navigate("EventDetails", {
      id: event.id,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={innerStyles.cardBody}>
        <Image
          source={{ uri: event.coverImageUrl }}
          style={innerStyles.cardImage}
        />
        <View style={innerStyles.cardLabel}>
          <Text style={innerStyles.cardLabelTitle}>{event.title}</Text>
          <View>
            <Text style={innerStyles.cardLabelDate}>{event.city}</Text>
            <Text style={innerStyles.cardLabelDate}>{formattedDate}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CreatedEventCard;

const innerStyles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    marginBottom: 20,
    marginTop: 10,
  },
  cardBody: {
    marginTop: 20,
    height: 200,
    position: "relative",
  },
  cardImage: {
    height: "100%",
    objectFit: "fill",
  },
  cardLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.mainTransparent,
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: "25%",
  },
  cardLabelTitle: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 18,
  },
  cardLabelDate: {
    color: "white",
  },
});
