import { View, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "../../Style/style";
import HomePageHeader from "../../components/HomePageHeader";
import { COLORS } from "../../assets/colors/colors";
import HomePageBody from "../../components/HomePageBody";
import { HOMEPLACES } from "../../api";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(`${HOMEPLACES}?limit=4`);

  return (
    <>
      {data && (
        <ScrollView style={[styles.container, { backgroundColor: "#F7E7D8" }]}>
          <HomePageHeader places={data.places} />
          <HomePageBody />
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

export default Home;
