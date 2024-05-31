import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { styles } from "../Style/style";
import PlaceCard from "./PlaceCard";
import SliderHeader from "./SliderHeader";

const PlacesHomeSlider = ({ apiUrl }) => {
  const { data, loading, error } = useFetch(apiUrl);
  const renderItem = ({ item, index }) => {
    return <PlaceCard item={item} key={index} />;
  };

  return (
    <View style={styles.sliderContainer}>
      <SliderHeader title={"Places"} />
      {data && (
        <View>
          <FlatList
            data={data.places}
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

export default PlacesHomeSlider;
