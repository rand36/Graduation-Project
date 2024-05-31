import { useEffect, useState } from "react";

const usePost = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = (url, data) => {
    setLoading(true);
    setError(null);
    setResponseData(null);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setResponseData(json);
        setLoading(false);
        console.log(json, "******");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    setLoading(false);
  };

  return { postData, responseData, loading, error };
};

export default usePost;
