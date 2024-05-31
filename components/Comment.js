import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Comment = ({ commentContent }) => {
  // console.log(commentContent);
  return (
    <View style={innerStyle.commentContainer}>
      <View style={innerStyle.commentHeader}>
        <Image
          source={{ uri: commentContent.user.imageUrl }}
          style={innerStyle.commentHeaderUserImage}
        />
        <View>
          <Text style={innerStyle.commnetHeaderUserName}>
            {commentContent.user.name}
          </Text>
          <Text>{formatDistanceToNow(new Date(commentContent.createdAt))}</Text>
        </View>
      </View>
      <View style={innerStyle.commentBody}>
        <Text style={innerStyle.commentBodyContent}>
          {commentContent.content}
        </Text>
      </View>
      <View style={innerStyle.hrLine} />
    </View>
  );
};

export default Comment;

const innerStyle = StyleSheet.create({
  commentContainer: { marginBottom: 15 },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  commentHeaderUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "grey",
    borderWidth: 0.5,
    borderColor: "grey",
  },
  commnetHeaderUserName: {
    fontSize: 16,
    fontWeight: "500",
  },
  commentBody: {
    marginLeft: 10,
  },
  commentBodyContent: { fontSize: 14, fontWeight: "500" },
  hrLine: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginTop: 10,
  },
});
