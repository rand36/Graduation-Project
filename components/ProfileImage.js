import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/colors/colors";
import * as ImagePicker from "expo-image-picker";
import useUploadImage from "../hooks/useUploadImage";
import { useAuthContext } from "../hooks/useAuthContext";
const ProfileImage = ({ imageUrl, type }) => {
  const { user } = useAuthContext();
  const [profileImage, setProfileImage] = useState(imageUrl);
  const { uploadImage, data, error, loading } = useUploadImage();

  const openGallery = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    }).then((result) => {
      if (!result.assets) {
        return;
      } else {
        setProfileImage(result.assets[0].uri);
        uploadImage(result.assets[0], user.id, setProfileImage);
      }
    });

    // console.log(result);
  };

  return (
    <View style={innerStyles.profileImageContainer}>
      <Image
        source={{ uri: profileImage }}
        style={innerStyles.imageContainer}
      />
      {loading && (
        <View style={[innerStyles.imageLoader, {}]}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
      {type == "me" && (
        <Pressable style={innerStyles.editImageButton} onPress={openGallery}>
          <Ionicons name={"camera"} size={28} color={COLORS.main} />
        </Pressable>
      )}
    </View>
  );
};

export default ProfileImage;
const innerStyles = StyleSheet.create({
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    backgroundColor: "grey",
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: COLORS.main,
    position: "relative",
    zIndex: 1,
  },
  imageLoader: {
    backgroundColor: "#D1C9C944",
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: COLORS.main,
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
  },
  editImageButton: {
    position: "absolute",
    right: 75,
    bottom: 25,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    borderColor: COLORS.main,
    borderWidth: 1,
    zIndex: 3,
  },
});
