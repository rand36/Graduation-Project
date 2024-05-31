import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../assets/colors/colors";

import ProfileEmpty from "./ProfileEmpty";
import CreatedEventCard from "./CreatedEventCard";
const ProfileCreatedEvents = ({ createdEvents }) => {
  return (
    <View style={innerStyles.cardContainer}>
      {createdEvents.length != 0 &&
        createdEvents.map((event, index) => {
          return <CreatedEventCard event={event} key={index} />;
        })}
      {createdEvents.length == 0 && (
        <ProfileEmpty
          titleText={"No Event Created"}
          buttonText={"Create Event"}
        />
      )}
    </View>
  );
};

export default ProfileCreatedEvents;

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
