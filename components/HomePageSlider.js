import { View, Text, ScrollView, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../assets/colors/colors";
import HomeCard from "./HomeCard";

const HomePageSlider = ({ title, apiUrl }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(apiUrl)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setData(json.places);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderItem = ({ item, index }) => {
    return <HomeCard item={item} key={index} />;
  };

  return (
    <View
      style={{
        backgroundColor: "#F7E7D8",
        marginBottom: 20,
      }}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 30,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "600", color: COLORS.navy }}>
          {title}
        </Text>
        <Text
          style={{
            paddingRight: 20,
            color: COLORS.main,
            fontWeight: "500",
          }}
        >
          see more
        </Text>
      </View>
      {/* header */}
      {/* body */}
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
      {!data && (
        <View>
          <Text>Wait...</Text>
        </View>
      )}
      {/* body */}
    </View>
  );
};

export default HomePageSlider;
