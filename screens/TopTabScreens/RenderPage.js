import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Overview from "./Overview";
import Review from "./Review";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import Map from "./Map";
import { Ionicons } from "@expo/vector-icons";

const RenderPage = ({ selectedWord, name, description, profileimage }) => {
  if (selectedWord == "Overview") {
    return (
      <View>
        <ScrollView>
          <Overview
            name={name}
            description={description}
            profileimage={profileimage}
          ></Overview>
        </ScrollView>
      </View>
    );
  } else if (selectedWord == "Map") {
    return (
      <>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <ScrollView>
            <Map></Map>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Ionicons name="bed-outline" size={50}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="restaurant-outline" size={50}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="car-outline" size={50}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginVertical: -10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StarRatingDisplay
                starSize={26}
                color="#D3AF0D"
                starStyle={{
                  marginLeft: -7.5,
                }}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                (4.5)
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFF4EA",
                alignSelf: "center",
                borderRadius: 15,
                marginBottom: 10,
                width: "35%",
                height: 40,
                top: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "700",
                  fontSize: 17,
                }}
              >
                Add Comment
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 15 }}></View>
          <ScrollView>
            <Review></Review>
          </ScrollView>
        </View>
      </>
    );
  }
};

export default RenderPage;
