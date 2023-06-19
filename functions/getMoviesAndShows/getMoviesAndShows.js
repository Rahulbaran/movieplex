import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const fetchTMDBData = async (about = "movie", type = "popular") => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${about}/${type}?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

export const handler = async () => {
  try {
    const response = await Promise.all([
      fetchTMDBData(),
      fetchTMDBData("movie", "top_rated"),
      fetchTMDBData("tv"),
      fetchTMDBData("tv", "top_rated")
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        movies: { popular: response[0], top_rated: response[1] },
        shows: { popular: response[2], top_rated: response[3] }
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "fail", message: error.toString() })
    };
  }
};
