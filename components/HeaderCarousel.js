import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const HeaderCarousel = ({ places }) => {
  const flatlistRef = useRef();

  const screnWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  const navigation = useNavigation();

  const handlePress = (e) => {
    console.log(e);
    navigation.navigate("PlaceDetails", {
      id: places[activeIndex].id,
    });
  };
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
  const carouselData = places;

  const getItemLayout = (data, index) => ({
    length: screnWidth, // width of each Item
    offset: screnWidth * index, // for first image 300 * 0 = 0px, 2nd image 300*1 = 300px, 300*2 = 600px
    index: index,
  });
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: screnWidth,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            height: 200,
            width: 320,
            borderRadius: 15,
            objectFit: "cover",
          }}
        />
        <View
          style={{
            position: "absolute",
            // backgroundColor: "#FFFFFF3F",
            bottom: 20,
            width: 200,
            height: 80,
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: "700",
              marginBottom: 5,
              textTransform: "capitalize",
            }}
          >
            {item.name}
          </Text>
          <Pressable
            onPress={handlePress}
            style={{
              width: "80%",
              backgroundColor: "red",
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: COLORS.main,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Explore Now
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screnWidth;

    setActiveIndex(index);
  };
  const renderDotIndicators = () => {
    if (carouselData === null) {
      return;
    } else {
      return carouselData.map((dot, index) => {
        if (activeIndex === index) {
          return (
            <View
              key={index}
              style={{
                backgroundColor: COLORS.main,
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
                backgroundColor: COLORS.grey,
                height: 10,
                width: 10,
                borderRadius: 5,
                marginHorizontal: 6,
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
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        ref={flatlistRef}
        data={carouselData}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default HeaderCarousel;
