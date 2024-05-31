import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import image from "../../assets/images/runing.png";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";

const Review = () => {
  const cardWidth = Dimensions.get("window").width * 0.9;
  const cardHeight = Dimensions.get("window").height * 0.3;
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#FFF6ED" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#DF702F",
            width: cardWidth,
            height: cardHeight,
            borderRadius: 10,
            alignItems: "center",
            margin: 17,
            paddingBottom: 5,
          }}
        >
          <Image
            source={image}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
          <TouchableOpacity style={{ position: "absolute", top: 10, left: 10 }}>
            {/* <Image
              source={{ uri: profileimage }}
              style={{
                position: "absolute",
                top: 8,
                borderColor: "#DF702F",
                borderWidth: 2,
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
            /> */}
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: "#DF702F",
              position: "absolute",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              bottom: 0,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 5,
                textAlign: "left",
                bottom: 5,
                textTransform: "capitalize",
              }}
            >
              rand
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              top: 10,
              alignSelf: "flex-end",
              right: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              jhdi
            </Text>
            <Text style={{ color: "white", textTransform: "capitalize" }}>
              jkasdj
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "#0000" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#DF702F",
            width: cardWidth,
            height: cardHeight,
            borderRadius: 10,
            alignItems: "center",
            margin: 17,
            paddingBottom: 5,
          }}
        >
          <Image
            source={image}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
          <TouchableOpacity style={{ position: "absolute", top: 10, left: 10 }}>
            {/* <Image
              source={{ uri: profileimage }}
              style={{
                position: "absolute",
                top: 8,
                borderColor: "#DF702F",
                borderWidth: 2,
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
            /> */}
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: "#DF702F",
              position: "absolute",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              bottom: 0,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 5,
                textAlign: "left",
                bottom: 5,
                textTransform: "capitalize",
              }}
            >
              rand
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              top: 10,
              alignSelf: "flex-end",
              right: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              jhdi
            </Text>
            <Text style={{ color: "white", textTransform: "capitalize" }}>
              jkasdj
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Review;
