import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import ProfileEventTabNavigator from "./ProfileEventTabNavigator";
import ProfilePosts from "./ProfilePosts";

const ProfileTabNavigator = ({ createdEvents, userId, type }) => {
  const [tab, setTab] = useState("events");
  return (
    <>
      <View style={innerStyles.container}>
        <Pressable
          style={[
            tab == "events" ? innerStyles.activeTab : innerStyles.inActiveTab,
            innerStyles.tab,
          ]}
          onPress={() => setTab("events")}
        >
          <Text
            style={[
              tab == "events"
                ? innerStyles.activeText
                : innerStyles.inActiveText,
              innerStyles.text,
            ]}
          >
            Events
          </Text>
        </Pressable>
        <Pressable
          style={[
            tab == "posts" ? innerStyles.activeTab : innerStyles.inActiveTab,
            innerStyles.tab,
          ]}
          onPress={() => setTab("posts")}
        >
          <Text
            style={[
              tab == "posts"
                ? innerStyles.activeText
                : innerStyles.inActiveText,
              innerStyles.text,
            ]}
          >
            Posts
          </Text>
        </Pressable>
      </View>
      {tab == "events" && (
        <ProfileEventTabNavigator createdEvents={createdEvents} />
      )}
      {tab == "posts" && <ProfilePosts userId={userId} type={type} />}
    </>
  );
};

export default ProfileTabNavigator;

const innerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 65,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "grey",
  },
  inActiveTab: {},
  text: {
    fontWeight: "800",
    fontSize: 20,
  },
  activeText: {
    color: "white",
  },
  inActiveText: {
    color: "black",
  },
});
