import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../assets/colors/colors";

const UserProfileTextInput = ({ title, value, editable, setter }) => {
  return (
    <View>
      <Text style={innerStyles.inputLabel}>{title}</Text>
      <TextInput
        style={[innerStyles.textInput, { color: editable ? "black" : "grey" }]}
        editable={editable}
        value={value}
        onChangeText={setter}
      />
    </View>
  );
};

export default UserProfileTextInput;

const innerStyles = StyleSheet.create({
  inputLabel: {
    color: COLORS.main,
    marginLeft: 5,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 18,
  },
  textInput: {
    borderColor: COLORS.main,
    borderWidth: 1.2,
    borderRadius: 20,
    padding: 8,
    fontSize: 16,
    paddingLeft: 20,
    marginVertical: 5,
  },
});
