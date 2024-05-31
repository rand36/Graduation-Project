import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fonts, styles } from "../../Style/style";
import { EVENTS } from "../../api";
import { COLORS } from "../../assets/colors/colors";
import useFetch from "../../hooks/useFetch";

import CreatedEventCard from "../../components/CreatedEventCard";

const Events = () => {
  const { data, loading, error } = useFetch(EVENTS);

  return (
    <>
      {data && (
        <ScrollView>
          <View style={styles.containerWithPadding20}>
            {data != null &&
              data.map((event, index) => {
                return <CreatedEventCard event={event} key={index} />;
              })}
          </View>
        </ScrollView>
      )}
      {loading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
    </>
  );
};

export default Events;
