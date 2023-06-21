import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export const handler = async event => {
  const type = event.queryStringParameters.type || "popular";
  const page = event.queryStringParameters.page || 1;

  try {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=${page}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
      }
    };

    const response = await axios.request(options);

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success", shows: response.data })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "fail", message: error.toString() })
    };
  }
};
