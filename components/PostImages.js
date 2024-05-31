import { View, FlatList, Dimensions, Image, Text } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../assets/colors/colors";

const PostImages = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / 304;

    setActiveIndex(index);
  };
  const renderItem = ({ item, index }) => {
    const screnWidth = Dimensions.get("window").width;
    return (
      <View
        style={{
          width: screnWidth - 60,
          height: 220,
          borderWidth: 1,
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  };
  const renderDotIndicators = () => {
    if (images === null || images.length == 1) {
      return;
    } else {
      return images.map((dot, index) => {
        if (activeIndex === index) {
          return (
            <View
              key={index}
              style={{
                backgroundColor: COLORS.main,
                height: 10,
                width: 10,
                borderRadius: 5,
                marginHorizontal: 5,
              }}
            ></View>
          );
        } else {
          return (
            <View
              key={index}
              style={{
                backgroundColor: COLORS.grey,
                height: 7,
                width: 7,
                borderRadius: 5,
                marginHorizontal: 5,
              }}
            ></View>
          );
        }
      });
    }
  };
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <FlatList
        horizontal
        data={images}
        renderItem={renderItem}
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 5,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#444444",
            padding: 1,
            borderRadius: 5,
            height: 12,
          }}
        >
          {renderDotIndicators()}
        </View>
      </View>
    </View>
  );
};

export default PostImages;
