import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetch from "../../hooks/useFetch";
import { GETUSER } from "../../api";
import { COLORS } from "../../assets/colors/colors";
import { styles } from "../../Style/style";
import ProfileImage from "../../components/ProfileImage";
import UserInfo from "../../components/UserInfo";
import ProfileTabNavigator from "../../components/ProfileTabNavigator";

const SomeOneProfile = ({ route, navigation }) => {
  const { user } = useAuthContext();
  const { data, loading, error } = useFetch(`${GETUSER}/${route.params.id}`);

  useEffect(() => {
    if (user.id == route.params.id) {
      navigation.navigate("Profile");
    }
  }, []);
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
            <ProfileImage imageUrl={data.user.imageUrl} type={"someone"} />
            <View style={innerStyle.actionContainer}>
              <Text style={innerStyle.userName}>{data.user.name}</Text>
              <Pressable
                style={{
                  alignItems: "center",
                }}
              >
                <Text style={innerStyle.messageButton}>Message</Text>
              </Pressable>
            </View>
          </View>
          <ProfileTabNavigator
            createdEvents={data.user.events}
            userId={route.params.id}
            type={"someone"}
          />
        </ScrollView>
      )}
    </>
  );
};

export default SomeOneProfile;

const innerStyle = StyleSheet.create({
  actionContainer: {
    marginVertical: 15,
  },
  userName: {
    textAlign: "center",
    fontSize: 28,
    textTransform: "capitalize",
    fontWeight: "500",
    color: COLORS.navy,
  },
  messageButton: {
    backgroundColor: COLORS.main,
    paddingHorizontal: 50,
    paddingVertical: 5,
    color: COLORS.white,
    fontSize: 20,
    borderRadius: 20,
    marginTop: 5,
  },
});
