import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { SIGNUP } from "../api";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigation = useNavigation();

  const signUp = async (email, username, password) => {
    setIsLoading(true);
    setError(false);
    fetch(SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.success == false) {
          setIsLoading(false);
          return setError(json.message);
        } else {
          dispatch({ type: "SIGNIN", payload: json.user });
          navigation.navigate("OtpPass", {
            userId: json.user.id,
            operationType: "create",
            email: json.user.email,
          });
          setIsLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { signUp, isLoading, error };
};
