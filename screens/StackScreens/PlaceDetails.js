import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Button,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HOMEPLACES } from "../../api";
import { COLORS } from "../../assets/colors/colors";
import { fonts, styles } from "../../Style/style";

import { StarRatingDisplay } from "react-native-star-rating-widget";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const PlaceDetails = ({ route, navigation }) => {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    fetch(`${HOMEPLACES}/${route.params.id}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPlaceData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const open = () => {
    Linking.openURL("https://maps.app.goo.gl/r2nEPo6iNSfoS7eD7").catch(
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      {placeData && (
        <ScrollView style={{ backgroundColor: "#F9D8B8" }}>
          <Image
            source={{ uri: placeData.imageUrlVertical }}
            style={innerStyles.placeBackImage}
          />
          <View style={innerStyles.imageShadow} />
          <View
            style={{
              position: "absolute",
              width: windowHeight,
              height: windowHeight,
            }}
          >
            <View style={innerStyles.landingContainer}>
              <Text style={[fonts.h1, { color: "white" }]}>
                {placeData.name}
              </Text>
              <Text style={innerStyles.prePlaceDescription}>
                {/* {"\t"} */}
                {placeData.preDescription}
              </Text>
              <View style={innerStyles.starContainer}>
                <StarRatingDisplay
                  rating={placeData.rating}
                  starSize={26}
                  color="#D3AF0D"
                  starStyle={{
                    marginLeft: -5,
                  }}
                />
                <Text style={innerStyles.rating}>{placeData.rating}</Text>
              </View>
            </View>
          </View>
          <View>
            {/* description */}
            <Text style={innerStyles.sectionTitle}>Description </Text>
            <Text
              style={[
                styles.containerWithPadding20,
                innerStyles.placeDescription,
              ]}
            >
              {placeData.description}
            </Text>
            {/* description */}
            {/* Resturants */}
            <Text style={innerStyles.sectionTitle}>Resturants </Text>
            {/* Resturants */}
            {/* Places To Stay */}
            <Text style={innerStyles.sectionTitle}>Places To Stay </Text>
            {/* Places To Stay */}
            <Button title="open" onPress={open} />
          </View>
        </ScrollView>
      )}
      {!placeData && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
    </>
  );
};

export default PlaceDetails;

const innerStyles = StyleSheet.create({
  placeBackImage: {
    width: windowWidth,
    height: windowHeight,
    objectFit: "cover",
  },
  imageShadow: {
    position: "absolute",
    width: windowHeight,
    height: windowHeight,
    backgroundColor: "#00000080",
  },
  landingContainer: {
    position: "absolute",
    width: windowWidth,
    height: 140,
    bottom: 40,
    paddingHorizontal: 30,
  },
  prePlaceDescription: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 16,
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.main,
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
  placeDescription: {
    color: COLORS.navy,
    fontSize: 16,
    fontWeight: 500,
    marginVertical: 5,
  },
});
