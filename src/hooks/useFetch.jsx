import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async url => {
      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        setError({ status: "fail", error });
      }
    };
    fetchData(url);
  }, [setData, url]);

  if (error) return error;
  return data;
};

export default useFetch;
