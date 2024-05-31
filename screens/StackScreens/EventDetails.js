import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { EVENTS } from "../../api";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import TopNavigation from "../TopTabScreens/TopNavigation";
import RenderPage from "../TopTabScreens/RenderPage";
import Overview from "../TopTabScreens/Overview";
import styles from "react-native-otp-input/styles";
import { COLORS } from "../../assets/colors/colors";
import useFetch from "../../hooks/useFetch";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const windowHeight = Dimensions.get("window").height * 0.4;
const windowWidth = Dimensions.get("window");

const EventDetails = ({ route }) => {
  const {
    data: dataa,
    loading,
    error,
  } = useFetch(`${EVENTS}/${route.params.id}`);

  console.log(dataa);

  const moment = require("moment");
  const [selectedWord, setSelectedWord] = useState("Overview");

  const handleWordPress = (word) => {
    setSelectedWord(word);
  };
  const eventID = route.params.id;
  const profileimage = route.params.profileimage;

  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [click, setClick] = useState(false);
  const handelClick = (word) => {
    if (word == "clicked") setClick(true);
    else setClick(false);
  };
  const render = useEffect(() => {
    fetch(`${EVENTS}/${eventID}`)
      .then((respons) => {
        return respons.json();
      })
      .then((json) => {
        setimage(json.coverImageUrl);
        setName(json.user.name);
        setDescription(json.description);
        return setData(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [render]);
  return (
    <>
      {dataa && (
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Image
            source={{ uri: dataa.coverImageUrl }}
            style={innerStyle.EventImage}
          />
          {/* ********* */}
          <View
            style={{
              width: windowWidth,
              height: windowHeight,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              backgroundColor: "#00000050",
              position: "absolute",
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",

              marginHorizontal: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "400",
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 6,
                textTransform: "capitalize",
                flex: 1,
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 15,
                // Text color
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: { width: 0, height: 0.5 },
                textShadowRadius: 6,
                textTransform: "capitalize",
              }}
            >
              {data.city} | {moment(data.Date).format("DD/MM/YYYY")}
            </Text>
          </View>

          <TopNavigation
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            handleWordPress={handleWordPress}
            style={{ margin: 10 }}
          ></TopNavigation>
          <View style={{ flex: 1 }}>
            <RenderPage
              selectedWord={selectedWord}
              profileimage={profileimage}
              name={name}
              description={description}
            ></RenderPage>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              margin: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <Ionicons
                name="information-circle-outline"
                size={30}
                color={"#A2A2A2"}
              ></Ionicons>
              <Text
                style={{
                  color: "#A2A2A2",
                  fontWeight: "700",
                  width: "45%",
                  height: 45,
                  right: 30,
                  top: 14,
                  textAlign: "center",
                  marginBottom: 10,
                  flex: 1,
                  fontSize: 17,
                  borderColor: "#DF702F",
                }}
              >
                {data.numberOfParticipant} Participants
              </Text>
            </View>
            {click ? (
              <TouchableOpacity
                onPress={() => handelClick("unclicked")}
                style={{
                  backgroundColor: "#8DAA94",
                  alignSelf: "center",
                  borderRadius: 15,
                  marginBottom: 10,
                  width: "45%",
                  height: 45,
                  top: 5,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: 19,
                  }}
                >
                  Joined
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => handelClick("clicked")}
                style={{
                  backgroundColor: "#DF702F",
                  alignSelf: "center",
                  borderRadius: 15,
                  marginBottom: 10,
                  width: "45%",
                  height: 45,
                  top: 5,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWecight: "700",
                    fontSize: 19,
                  }}
                >
                  Join Now
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default EventDetails;

const innerStyle = StyleSheet.create({
  EventImage: {
    width: width,
    height: height * 0.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    objectFit: "fill",
  },
});
