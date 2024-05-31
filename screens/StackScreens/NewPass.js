import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { fonts, styles } from "../../Style/style";
import logo from "../../assets/images/logo-color.png";
import { useState } from "react";
import { NEWPASSWORD } from "../../api";
import { COLORS } from "../../assets/colors/colors";
const NewPass = ({ navigation, route, params }) => {
  console.log(route);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState();
  const handleSubmit = () => {
    const id = route.params.id;
    if (password.length == 0 || confirmPassword.length == 0) {
      setConfirmPassword("");
      setPassword("");
      setError("Password can not be empty!");
    } else if (password !== confirmPassword) {
      setConfirmPassword("");
      setPassword("");
      setError("Both passwords must match!");
    } else if (password === confirmPassword) {
      fetch(NEWPASSWORD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password, id: id }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setIsLoading(false);
          if (json.success == true) {
            navigation.navigate("SignIn");
          } else {
            setIsLoading(false);
            setPassword("");
            setConfirmPassword("");
            return setError(json.message);
          }
        });
    }
    setIsLoading(false);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.authHeader}>
          <Image source={logo} style={[styles.authLogo, { marginTop: 60 }]} />
          <Text style={[fonts.h1, { marginTop: 20 }]}>Reset Your Passowrd</Text>
        </View>
        <View style={styles.containerWithPadding}>
          <Text style={[fonts.h2, { marginTop: 25, fontSize: 15 }]}>
            Enter Your Passowrd
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <Text style={[fonts.h2, { marginTop: 5, fontSize: 15 }]}>
            Confirm Your Passowrd
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <Pressable onPress={handleSubmit} style={{ marginTop: 30 }}>
            <View style={styles.bottonBlock}>
              <Text style={styles.bottonText}>Submit </Text>
            </View>
          </Pressable>
          <View style={styles.errorBox}>
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>
        </View>
      </View>
      {isLoading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
    </>
  );
};

export default NewPass;
