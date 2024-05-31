import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { fonts, styles } from "../../Style/style";
import logo from "../../assets/images/logo-color.png";
import { useSignup } from "../../hooks/useSignup";
import { COLORS } from "../../assets/colors/colors";

const SignUp = ({ navigation }) => {
  const { signUp, error, isLoading } = useSignup();
  const [email, setEmail] = useState("@gmail.com");
  const [username, setUserName] = useState("rr");
  const [password, setPassword] = useState("Ra12345#");

  const handleSubmit = () => {
    signUp(email, username, password);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "padding"}
          style={styles.container}
        >
          <View style={styles.authHeader}>
            <Image source={logo} style={styles.authLogo} />
            <Text style={fonts.h1}>Welcome</Text>
            <Text style={fonts.h2}>Create An Account</Text>
          </View>
          <View style={[styles.authBody, styles.containerWithPadding]}>
            <Text style={fonts.sectionHeader}>Sign Up</Text>

            <TextInput
              placeholder="Email"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="User Name"
              style={styles.textInput}
              value={username}
              onChangeText={setUserName}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
            />

            <Pressable onPress={handleSubmit}>
              <View style={[styles.bottonBlock, { marginTop: 15 }]}>
                <Text style={styles.bottonText}>Sign Up</Text>
              </View>
            </Pressable>

            <View style={styles.errorBox}>
              {error && <Text style={styles.errorText}>{error}</Text>}
            </View>

            <View style={styles.linkView}>
              <Text>Already Have An Account?</Text>
              <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.linkColor}> Sign In</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {isLoading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={100} color={COLORS.main} />
        </View>
      )}
    </>
  );
};

export default SignUp;
