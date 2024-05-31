import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fonts, styles } from "../../Style/style";
import { EVENTS } from "../../api";
import { COLORS } from "../../assets/colors/colors";
const MyCardList = ({
  title,
  date,
  EvenetId,
  userId,
  coverimage,
  profileimage,
  city,
}) => {
  const moment = require("moment");
  const [isLoading, setIsLoading] = useState(null);
  const cardWidth = Dimensions.get("window").width * 0.9;
  const cardHeight = Dimensions.get("window").height * 0.3;
  const navigation = useNavigation();
  const handleEventPress = () => {
    navigation.navigate("EventDetails", {
      EvenetId: EvenetId,
      profileimage: profileimage,
    });
    const userid = { userId: userId };
  };
  const handleProfilePress = () => {
    navigation.navigate("EventDetails", { userId: userId });
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#0000" }}>
        <TouchableOpacity
          onPress={handleEventPress}
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
            source={{ uri: coverimage }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
          <TouchableOpacity
            onPress={handleProfilePress}
            style={{ position: "absolute", top: 10, left: 10 }}
          >
            <Image
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
            />
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
              {title}
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
              {city}
            </Text>
            <Text style={{ color: "white", textTransform: "capitalize" }}>
              {moment(date.Date).format("DD/MM/YYYY")}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
const Events = () => {
  const [data, setData] = useState("");
  const render = useEffect(() => {
    fetch(EVENTS)
      .then((respons) => {
        return respons.json();
      })
      .then((json) => {
        return setData(json);
      });
  }, []);
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MyCardList
            title={item.title}
            date={item.startDate}
            EvenetId={item.id}
            userId={item.user.id}
            coverimage={item.coverImageUrl}
            profileimage={item.user.imageUrl}
            city={item.city}
          />
        )}
      />
      {!data && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
    </>
  );
};
export default Events;
