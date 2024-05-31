import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { COLORS } from "../../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const AddPost = () => {
  const { user } = useAuthContext();
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("CreatePost", {});
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 5,
          alignItems: "center",
          marginTop: 20,
          gap: 10,
        }}
      >
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 8,
            borderColor: COLORS.grey,
            borderRadius: 20,
          }}
        >
          <Text>Share Us Your Words {user.name.split(" ")[0]}</Text>
        </View>
        <Ionicons name={"images"} size={28} color={COLORS.main} />
      </View>
    </Pressable>
  );
};

export default AddPost;
