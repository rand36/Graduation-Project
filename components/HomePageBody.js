import { View } from "react-native";
import React from "react";
import { HOMEPLACES, EVENTS } from "../api";
import PlacesHomeSlider from "./PlacesHomeSlider";
import EventsHomeSlider from "./EventsHomeSlider";

const HomePageBody = () => {
  return (
    <View
      style={{
        marginTop: 60,
        paddingLeft: 0,
      }}
    >
      <PlacesHomeSlider apiUrl={`${HOMEPLACES}?limit=4&offset=4`} />
      <EventsHomeSlider apiUrl={`${EVENTS}`} />
      <PlacesHomeSlider title={"Rent Car"} apiUrl={`${HOMEPLACES}?limit=2`} />
    </View>
  );
};

export default HomePageBody;
