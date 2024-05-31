import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const ProfileEmpty = ({ titleText, buttonText, type }) => {
  return (
    <View style={innerStyles.emptyCardContainer}>
      <Ionicons name={"albums-outline"} size={130} color={"grey"} />
      <Text style={innerStyles.emptyText}>{titleText}</Text>
      {type == "me" && (
        <Text style={innerStyles.emptyButton}>{buttonText}</Text>
      )}
    </View>
  );
};

export default ProfileEmpty;

const innerStyles = StyleSheet.create({
  emptyCardContainer: {
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "grey",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
  },
  emptyButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "500",
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "grey",
  },
});
