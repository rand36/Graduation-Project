import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

const TopNavigation = ({ selectedWord, handleWordPress }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          marginLeft: 5,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable onPress={() => handleWordPress("Overview")}>
            <Text
              style={[
                styles.wordText,
                selectedWord === "Overview" && styles.selectedWord,
              ]}
            >
              Overview
            </Text>
          </Pressable>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#A2A2A2" }}>
            |
          </Text>
          <Pressable onPress={() => handleWordPress("Map")}>
            <Text
              style={[
                styles.wordText,
                selectedWord === "Map" && styles.selectedWord,
              ]}
            >
              Map
            </Text>
          </Pressable>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#A2A2A2" }}>
            |
          </Text>
          <Pressable onPress={() => handleWordPress("Review")}>
            <Text
              style={[
                styles.wordText,
                selectedWord === "Review" && styles.selectedWord,
              ]}
            >
              Review
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            alignItems: "center",

            flex: 1,
            top: 30,
          }}
        ></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  wordText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A2A2A2",
    padding: 5,
  },
  selectedWord: {
    color: "#DF702F",
  },
});

export default TopNavigation;
