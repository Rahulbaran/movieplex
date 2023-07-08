import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export const handler = async event => {
  const { content: contentType, query } = event.queryStringParameters;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/${contentType}?query=${query}&include_adult=true&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
    }
  };

  try {
    const res = await axios.request(options);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        data: res.data
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "fail", message: error.toString() })
    };
  }
};
