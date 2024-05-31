import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import UserProfileTextInput from "./UserProfileTextInput";
import { COLORS } from "../assets/colors/colors";
import usePost from "../hooks/usePost";
import { EDITUSERINFO } from "../api";

const UserInfo = ({ data }) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [enableEdit, setEnableEdit] = useState(false);
  const [name, setName] = useState(data.user.name);
  const [email, setEmail] = useState(data.user.email);
  const [gender, setGender] = useState(data.user.gender);
  const [dateOfBirth, setDateOfBirth] = useState(data.user.dateOfBirth);

  const handlePress = () => {
    setEnableEdit(true);
  };
  const handleCancel = () => {
    setEnableEdit(false);
    setName(data.user.name);
    setEmail(data.user.email);
    setGender(data.user.gender);
    setDateOfBirth(data.user.dateOfBirth);
  };
  const handleSave = () => {
    if (loading == true) {
      return false;
    }
    setLoading(true);
    fetch(`${EDITUSERINFO}/${data.user.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        gender,
        dateOfBirth,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setResponseData(json);
        alert(json.message);
        setEnableEdit(false);
      })
      .catch((err) => {
        alert(json.err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={{ position: "relative" }}>
      <View style={innerStyles.editPencil}>
        <Pressable onPress={handlePress}>
          <Ionicons name={"pencil"} size={20} color={COLORS.navy} />
        </Pressable>
      </View>
      <UserProfileTextInput
        title={"Name"}
        value={name}
        editable={enableEdit}
        setter={setName}
      />
      <UserProfileTextInput
        title={"Email"}
        value={email}
        editable={enableEdit}
        setter={setEmail}
      />
      <UserProfileTextInput
        title={"Gender"}
        value={gender}
        editable={enableEdit}
        setter={setGender}
      />
      <UserProfileTextInput
        title={"Birthday"}
        value={dateOfBirth}
        editable={enableEdit}
        setter={setDateOfBirth}
      />
      {/* <DatePicker */}
      <View style={innerStyles.buttonBox}>
        {enableEdit && (
          <>
            <Pressable
              style={[innerStyles.button, { backgroundColor: "#A8A8A8" }]}
              onPress={handleCancel}
            >
              <Text style={{ fontWeight: "600", color: "white", fontSize: 16 }}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={[innerStyles.button, { backgroundColor: COLORS.main }]}
              onPress={handleSave}
            >
              <Text style={{ fontWeight: "600", color: "white", fontSize: 16 }}>
                Save
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default UserInfo;
const innerStyles = StyleSheet.create({
  editPencil: {
    position: "absolute",
    right: 0,
    zIndex: 3,
  },
  buttonBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
    marginTop: 5,
    // height: 40,
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
  },
});
