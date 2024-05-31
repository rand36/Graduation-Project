import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          console.log(err);
        });
    };

    fetchData();

    return () => {};
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
