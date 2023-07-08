import { useState } from "react";
import axios from "axios";

export default function useSearch(content) {
  const [query, setQuery] = useState("");
  const [res, setRes] = useState({ status: "" });

  const handleQuery = str => setQuery(str);

  const handleSearchForm = async e => {
    e.preventDefault();
    setRes({ status: "" });

    try {
      const response = await axios(
        `/.netlify/functions/searchContent?query=${query}&content=${content}`
      );
      setRes(response.data);
      setQuery("");
    } catch (error) {
      setRes({ status: "fail" });
    }
  };

  return [query, res, handleQuery, handleSearchForm];
}
