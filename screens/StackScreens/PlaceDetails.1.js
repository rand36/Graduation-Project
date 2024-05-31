import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { HOMEPLACES } from "../../api";
import { COLORS } from "../../assets/colors/colors";
import { fonts, styles } from "../../Style/style";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { innerStyles } from "./PlaceDetails";

export const PlaceDetails = ({ route, navigation }) => {
  const [placeData, setPlaceData] = useState(null);
  console.log(placeData);
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
  return (
    <>
      {placeData && (
        <ScrollView>
          <Image
            source={{ uri: placeData.imageUrlVertical }}
            style={innerStyles.placeBackImage}
          />
          <View style={innerStyles.imageShadow} />
          <View style={innerStyles.landingContainer}>
            <Text style={[fonts.h1, { color: "white" }]}>{placeData.name}</Text>
            <Text style={innerStyles.placeDescription}>
              {"\t"}
              {placeData.description}
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
