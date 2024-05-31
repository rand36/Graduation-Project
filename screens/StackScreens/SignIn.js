import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fonts, styles } from "../../Style/style";
import logo from "../../assets/images/logo-color.png";
import { useSignin } from "../../hooks/useSignin";
import { useAuthContext } from "../../hooks/useAuthContext";

import { COLORS } from "../../assets/colors/colors";

const SignIn = ({ navigation }) => {
  const { signIn, error, isLoading } = useSignin();
  const { user } = useAuthContext();
  const [email, setEmail] = useState("alaa@gmail.com");
  const [password, setPassword] = useState("Ra12345#");

  const handleSubmit = () => {
    signIn(email, password);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.authHeader}>
          <Image source={logo} style={styles.authLogo} />
          <Text style={fonts.h1}>Hello Again!</Text>
          <Text style={fonts.h2}>We Missed You</Text>
        </View>
        <View style={[styles.authBody, styles.containerWithPadding]}>
          <Text style={fonts.sectionHeader}>Sign In</Text>

          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Pressable onPress={() => navigation.navigate("RestPass")}>
            <View style={styles.formOptions}>
              <Text>forgot Password?</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handleSubmit()}>
            <View style={styles.bottonBlock}>
              <Text style={styles.bottonText}>Sign In</Text>
            </View>
          </Pressable>

          <View style={styles.errorBox}>
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>

          <View style={styles.linkView}>
            <Text>Don't Have An Account?</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.linkColor}> Sign Up</Text>
            </Pressable>
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

export default SignIn;
