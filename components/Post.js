import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Comment from "./Comment";
import { useAuthContext } from "../hooks/useAuthContext";
import { COLORS } from "../assets/colors/colors";
import PostImages from "./PostImages";
const Post = ({ postContent }) => {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(postContent.comments);
  const [newComments, setNewComments] = useState([]);

  console.log(postContent);

  const handleAddComment = () => {
    if (newComment.length == 0) {
      return;
    } else {
      let newCommentObject = {};

      fetch("https://guide-jo-back-end.onrender.com/api/comment/addcomment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newComment,
          bulletinId: postContent.id,
          userId: user.id,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          newCommentObject = {
            ...newCommentObject,
            ...json.comment,
            user: {
              id: user.id,
              imageUrl: user.imageUrl,
              name: user.name,
            },
          };
          setNewComments([...newComments, newCommentObject]);
          setNewComment("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View style={innerStyle.postContainer}>
      <View style={innerStyle.postHeader}>
        <View style={innerStyle.postHeaderUserInfo}>
          <Image
            source={{ uri: postContent.user.imageUrl }}
            style={innerStyle.postHeaderUserImage}
          />
          <View>
            <Text style={innerStyle.postHeaderUserName}>
              {postContent.user.name}
            </Text>
            <Text style={innerStyle.postHeaderPostDate}>
              {formatDistanceToNow(new Date(postContent.createdAt), {
                addSuffix: true,
              })}
            </Text>
          </View>
        </View>
        <Ionicons name={"chatbubbles"} size={30} color={COLORS.navy} />
      </View>
      <View style={innerStyle.postBodyContainer}>
        <Text style={innerStyle.postBodyContent}>{postContent.text}</Text>
        {postContent.bulletinImages.length != 0 && (
          <PostImages images={postContent.bulletinImages}></PostImages>
        )}
        <View style={innerStyle.hrLine}></View>
      </View>
      {postContent.comments.length != 0 && (
        <View style={{ marginLeft: 20 }}>
          {comments.map((comment, index) => {
            return <Comment commentContent={comment} key={index} />;
          })}
        </View>
      )}
      {newComments != null && (
        <View style={{ marginLeft: 20 }}>
          {newComments.map((comment, index) => {
            return <Comment commentContent={comment} key={index} />;
          })}
        </View>
      )}
      {/* add commnet  */}
      <View style={innerStyle.commmentBoxContainer}>
        <TextInput
          style={innerStyle.commentField}
          placeholder="Comment Here "
          value={newComment}
          onChangeText={setNewComment}
        ></TextInput>
        <View style={innerStyle.commentButtinContainer}>
          <Pressable onPress={handleAddComment}>
            <Ionicons
              name={"send"}
              size={25}
              color={newComment.length == 0 ? "white" : COLORS.navy}
            />
          </Pressable>
        </View>
      </View>
      {/* add commnet  */}
    </View>
  );
};

export default Post;

const innerStyle = StyleSheet.create({
  postContainer: {
    backgroundColor: "#9cb1b5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 15,
  },
  postHeader: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
  },
  postHeaderUserInfo: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  postHeaderUserImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  postHeaderUserName: {
    fontWeight: "600",
    fontSize: 17,
  },
  postHeaderPostDate: {
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 5,
  },
  postBodyContainer: {
    marginBottom: 10,
  },
  postBodyContent: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "600",
  },
  hrLine: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginTop: 10,
  },
  commmentBoxContainer: {
    width: "100%",
    flexDirection: "row",
  },
  commentField: {
    flex: 9,
    height: 30,
    backgroundColor: "white",
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  commentButtinContainer: {
    height: "100%",
    flex: 1,
    paddingLeft: 5,
    alignItems: "center",
  },
});
