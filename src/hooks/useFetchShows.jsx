import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchShows(type = "popular") {
  const [page, setPage] = useState(1);
  const [res, setRes] = useState({ status: "", shows: [] });
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    const fetchShows = async () => {
      try {
        const response = await axios(
          `/.netlify/functions/getShows?page=${page}&type=${type}`
        );
        setRes(prev => ({
          status: "success",
          shows: [...prev.shows, ...response.data.shows.results]
        }));
      } catch (error) {
        setRes({ status: "fail", error });
      }
    };
    fetchShows();
  }, [page, type, initialRender]);

  const loadShows = () => setPage(prevPage => prevPage + 1);

  return [res, loadShows, setRes, setPage];
}
