import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { styles } from "../Style/style";
import Post from "./Post";
import { useAuthContext } from "../hooks/useAuthContext";
import ProfileEmpty from "./ProfileEmpty";
const ProfilePosts = ({ userId, type }) => {
  const { user } = useAuthContext();
  const { data, loading, error } = useFetch(
    `https://guide-jo-back-end.onrender.com/api/bulletin/user/${userId}`
  );

  return (
    <View style={styles.containerWithPadding20}>
      <View>
        {data != null &&
          data.map((post, index) => {
            return <Post postContent={post} key={index} />;
          })}
      </View>
      {data != null && data.length == 0 && (
        <ProfileEmpty
          titleText={"No Post Created"}
          buttonText={"Create Post"}
          type={type}
        />
      )}
    </View>
  );
};

export default ProfilePosts;
