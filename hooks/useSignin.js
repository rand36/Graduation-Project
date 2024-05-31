import { View, Text } from "react-native";
import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { useOtp } from "./useOtp";
import { SIGNIN } from "../api";

export function useSignin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigation = useNavigation();
  const signIn = (email, password) => {
    setIsLoading(true);
    setError(false);
    fetch(SIGNIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.success === false) {
          setIsLoading(false);
          return setError(json.message);
        } else {
          dispatch({ type: "SIGNIN", payload: json.user });
          navigation.navigate("Tab");
          setIsLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { signIn, error, isLoading };
}
