import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const getShowInfo = async show_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${show_id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

const getShowVideos = async show_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${show_id}/videos?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

const getShowCasts = async show_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${show_id}/credits?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

const getSimilarShows = async show_id => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${show_id}/similar?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };
  const response = await axios.request(options);
  return response.data;
};

export const handler = async event => {
  const show_id = event.queryStringParameters.show_id;

  try {
    const response = await Promise.all([
      getShowInfo(show_id),
      getShowVideos(show_id),
      getShowCasts(show_id),
      getSimilarShows(show_id)
    ]);
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        showInfo: response[0],
        videos: response[1].results,
        casts: response[2].cast,
        similar_shows: response[3].results
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "fail",
        message: error.toString()
      })
    };
  }
};
