import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { styles } from "../Style/style";
import { COLORS } from "../assets/colors/colors";
import ProfileCreatedEvents from "./ProfileCreatedEvents";

const ProfileEventTabNavigator = ({ createdEvents }) => {
  const [tab, setTab] = useState("created");

  return (
    <View>
      <View style={[innerStyles.container]}>
        <Text
          style={[
            innerStyles.button,
            tab == "created"
              ? innerStyles.activeButton
              : innerStyles.inActiveButton,
          ]}
          onPress={() => setTab("created")}
        >
          Created
        </Text>
        <Text
          style={[
            innerStyles.button,
            tab == "joined"
              ? innerStyles.activeButton
              : innerStyles.inActiveButton,
          ]}
          onPress={() => setTab("joined")}
        >
          Joined
        </Text>
      </View>
      {/* remove height when finish  */}
      <View style={styles.containerWithPadding20}>
        {tab == "joined" && (
          <Text>joined</Text>
          // <ProfileCreatedEvents createdEvents={createdEvents} />
        )}
        {tab == "created" && (
          <ProfileCreatedEvents createdEvents={createdEvents} />
        )}
      </View>
    </View>
  );
};

export default ProfileEventTabNavigator;
const innerStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // padding: 5,
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 50,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  activeButton: {
    backgroundColor: COLORS.main,
    color: "white",
  },
  inActiveButton: {
    color: "black",
  },
});
