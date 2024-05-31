import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { styles } from "../Style/style";
import SliderHeader from "./SliderHeader";
import EventCardSlider from "./EventCardSlider";

const EventsHomeSlider = ({ apiUrl }) => {
  const { data, loading, error } = useFetch(apiUrl);

  const renderItem = ({ item, index }) => {
    return <EventCardSlider event={item} key={index} />;
  };

  return (
    <View style={styles.sliderContainer}>
      <SliderHeader title={"Events"} toWhere={"Events"} />
      {data && (
        <View>
          <FlatList
            data={data}
            horizontal
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
      {loading && (
        <View>
          <Text>Wait...</Text>
        </View>
      )}
    </View>
  );
};

export default EventsHomeSlider;
