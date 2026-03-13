import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Network error");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, setData, loading, error };
};

export default useFetch;