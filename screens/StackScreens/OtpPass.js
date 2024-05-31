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
import { COLORS } from "../../assets/colors/colors";
import { useOtp } from "../../hooks/useOtp";
import { OtpInput } from "react-native-otp-entry";
const OtpPass = ({ navigation, route }) => {
  const { operationType, userId, email } = route.params;
  const { otp, isLoading, error } = useOtp();
  const [temp, setTemp] = useState("");
  const handleSubmit = () => {
    otp(temp, userId, operationType);
  };
  return (
    <>
      <View style={[styles.container, { marginEnd: 20, marginStart: 20 }]}>
        <View style={styles.authHeader}>
          <Image source={logo} style={styles.authLogo} />
          <Text style={[fonts.h2, { fontWeight: "600", fontSize: 30 }]}>
            Verification
          </Text>
          <Text
            style={[
              fonts.h2,
              {
                marginTop: 35,
                marginBottom: 50,
                textAlign: "center",
                fontWeight: "bold",
              },
            ]}
          >
            We send a Verification code at {"\n"}
            {email}
          </Text>
        </View>
        <View>
          <OtpInput
            numberOfDigits={4}
            focusColor="Black"
            focusStickBlinkingDuration={500}
            onTextChange={setTemp}
            value={temp}
            keyboardType="numeric"
            theme={{
              pinCodeContainerStyle: styles.otpBox,
            }}
          />
        </View>

        <View style={[styles.authHeader, { marginTop: 30 }]}>
          <Text style={[fonts.h2, { fontWeight: "600" }]}>
            Haven’t recived the verification code?
          </Text>
          <Text
            style={[
              fonts.h2,
              { marginTop: 20, marginBottom: 50, color: COLORS.blue },
            ]}
          >
            Resend 2:00
          </Text>
        </View>
        <Pressable onPress={handleSubmit}>
          <View style={[styles.bottonBlock, { marginTop: -15 }]}>
            <Text style={styles.bottonText}>Verifiy </Text>
          </View>
        </Pressable>
        <View style={styles.errorBox}>
          {error && <Text style={styles.errorText}>{error}</Text>}
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

export default OtpPass;
