import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { fonts, styles } from "../../Style/style";
import logo from "../../assets/images/logo-color.png";
import { RESETPASSWORD } from "../../api";
import { COLORS } from "../../assets/colors/colors";

const ResetPass = ({ navigation }) => {
  const [email, setEmail] = useState("alaa@gmail.com");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = () => {
    setIsLoading(true);
    setError(false);
    fetch(RESETPASSWORD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        if (json.success == true) {
          setIsLoading(false);
          navigation.navigate("OtpPass", {
            userId: json.userId,
            operationType: "forget",
            email: email,
          });
        } else {
          setIsLoading(false);
          return setError(json.message);
        }
      });
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.authHeader}>
          <Image source={logo} style={styles.authLogo} />
          <Text style={fonts.h1}>Forget Password!</Text>
          <Text
            style={[
              fonts.h2,
              { marginTop: 20, marginBottom: 50, fontSize: 22 },
            ]}
          >
            Enter Your Email
          </Text>
        </View>
        <View style={styles.containerWithPadding}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
          <Pressable style={{ marginTop: 50 }} onPress={handleSubmit}>
            <View style={styles.bottonBlock}>
              <Text style={styles.bottonText}>Send </Text>
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

export default ResetPass;
