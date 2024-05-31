import { View, Text, Image } from "react-native";
import React from "react";
import image2 from "../../assets/images/profile.png";
const Overview = ({ name, description, profileimage }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          color: "#DF702F",

          textShadowRadius: 4,
        }}
      >
        About
      </Text>
      <Text
        style={{
          marginHorizontal: 5,
          padding: 10,
          textTransform: "capitalize",
          fontSize: 16,
          width: 330,
        }}
        placeholder="About Event"
      >
        {description}
      </Text>

      <Text
        style={{
          fontSize: 25,
          top: 10,
          color: "#DF702F",

          textShadowRadius: 4,
          textTransform: "capitalize",
        }}
      >
        Event Owner
      </Text>
      <View
        style={{
          marginTop: 15,
          marginLeft: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: profileimage }}
          style={{
            borderColor: "#DF702F",
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            padding: 20,
            fontSize: 25,
            color: "#000",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

export default Overview;
