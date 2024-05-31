import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { GETUSER } from "../api";
import { COLORS } from "../assets/colors/colors";
import useFetch from "../hooks/useFetch";
import { styles } from "../Style/style";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import ProfileTabNavigator from "./ProfileTabNavigator";
const RegisteredUser = () => {
  const { user } = useAuthContext();
  const { data, loading, error } = useFetch(`${GETUSER}/${user.id}`);
  return (
    <>
      {loading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
      {!loading && (
        <ScrollView>
          <View style={styles.containerWithPadding20}>
            <ProfileImage imageUrl={data.user.imageUrl} type={"me"} />
            <UserInfo data={data} />
          </View>
          <ProfileTabNavigator
            createdEvents={data.user.events}
            userId={user.id}
            type={"me"}
          />
        </ScrollView>
      )}
    </>
  );
};

export default RegisteredUser;
