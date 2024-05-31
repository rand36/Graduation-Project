import { View, Text } from "react-native";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import AnonymousUser from "../../components/AnonymousUser";
import RegisteredUser from "../../components/RegisteredUser";

const Profile = () => {
  const { user } = useAuthContext();
  return <View>{user == null ? <AnonymousUser /> : <RegisteredUser />}</View>;
};

export default Profile;
