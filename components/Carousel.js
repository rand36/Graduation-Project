import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import logo from "./../assets/images/logo-color.png";

// handle Scroll
const Carousel = () => {
  const flatlistRef = useRef();
  // Get Dimensions
  const screnWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: screnWidth, // width of each Item
    offset: screnWidth * index, // for first image 300 * 0 = 0px, 2nd image 300*1 = 300px, 300*2 = 600px
    index: index,
  });

  //Data for Carousel
  const carouselData = [
    {
      id: "01",
      image: require("../assets/images/onboard-landing.png"),
    },
    {
      id: "02",
      image: require("../assets/images/logo-color.png"),
    },
    {
      id: "03",
      image: require("../assets/images/onboard-landing.png"),
    },
  ];

  // Display Images // UI
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screnWidth, objectFit: "fill" }}
        />
      </View>
    );
  };

  // Handle Scrool
  const handleScroll = (event) => {
    // Get Scroll posation
    const scrollPosition = event.nativeEvent.contentOffset.x;

    // get the index of current active item
    const index = scrollPosition / screnWidth;
    // console.log(index);
    // Update The Index
    setActiveIndex(index);
  };

  // Render Dot Indecators
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      // if the active index === index
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "green",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "red",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      }
    });
  };

  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
        ref={flatlistRef}
        data={carouselData}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};
export default Carousel;

const style = StyleSheet.create({});
