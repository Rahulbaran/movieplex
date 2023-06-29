import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const getMovieInfo = async movie_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

const getMovieCasts = async movie_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

const getMovieVideos = async movie_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

const getSimilarMovies = async movie_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

export const handler = async event => {
  const movie_id = event.queryStringParameters.movie_id;

  try {
    const response = await Promise.all([
      getMovieInfo(movie_id),
      getMovieCasts(movie_id),
      getMovieVideos(movie_id),
      getSimilarMovies(movie_id)
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        movieInfo: response[0],
        casts: response[1].cast,
        videos: response[2].results,
        similar_movies: response[3].results
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "fail", message: error.toString() })
    };
  }
};
