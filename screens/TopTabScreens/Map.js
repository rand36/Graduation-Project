import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { COLORS } from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import Overview from "../TopTabScreens/Overview";
const Map = () => {
  const navigation = useNavigation();
  const intial_region = {
    latitude: 31.95522,
    longitude: 35.94503,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  // onPress={() => navigation.navigate("Events")}
  return (
    <TouchableOpacity>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 20,
            overflow: "hidden",
            borderColor: COLORS.main,
            height: 240,
          }}
        >
          <MapView
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 500,
              height: 240,
              borderWidth: 2,
              borderColor: "red",
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={intial_region}
          ></MapView>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

export default Map;
