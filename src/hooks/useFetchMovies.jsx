import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchMovies(type = "popular") {
  const [page, setPage] = useState(1);
  const [res, setRes] = useState({ status: "", movies: [] });
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    const fetchMovies = async () => {
      try {
        const response = await axios(
          `/.netlify/functions/getMovies?page=${page}&type=${type}`
        );
        setRes(prev => ({
          status: "success",
          movies: [...prev.movies, ...response.data.movies.results]
        }));
      } catch (error) {
        setRes({ status: "fail", error });
      }
    };

    fetchMovies();
  }, [page, type, initialRender]);

  const loadMovies = () => setPage(prevPage => prevPage + 1);

  return [res, loadMovies, setRes, setPage];
}
