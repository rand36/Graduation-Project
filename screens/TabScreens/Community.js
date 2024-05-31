import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../Style/style";
import useFetch from "../../hooks/useFetch";
import Post from "../../components/Post";
import { GETBULLETIN } from "../../api";
import { COLORS } from "../../assets/colors/colors";
import AddPost from "../StackScreens/AddPost";

const Community = () => {
  const { data, loading, error } = useFetch(GETBULLETIN);
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <>
      <ScrollView style={styles.containerWithPadding20}>
        <AddPost />
        {posts != null &&
          posts.length != 0 &&
          posts.map((post, index) => {
            return <Post postContent={post} key={index} />;
          })}
      </ScrollView>
      {loading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
    </>
  );
};

export default Community;
