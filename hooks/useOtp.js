import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ACTIVEOTP, FORGETOTP } from "../api";

export const useOtp = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const otp = async (temp, userId, operationType) => {
    setIsLoading(true);
    setError(false);
    let url;
    if (operationType == "create") {
      url = ACTIVEOTP;
    } else if (operationType == "forget") {
      url = FORGETOTP;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: userId,
        otp: temp,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.success == true) {
          setIsLoading(false);
          if (operationType == "create") {
            navigation.navigate("SignIn"), {};
          } else if (operationType == "forget") {
            navigation.navigate("NewPass", {
              id: userId,
            });
          }
        } else {
          setIsLoading(false);
          return setError(json.message);
        }
      });
  };
  return { otp, isLoading, error };
};
