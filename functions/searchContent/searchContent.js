import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export const handler = async event => {
  const { content: contentType, query } = event.queryStringParameters;
  const page = event.queryStringParameters.page || 1;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/${contentType}?query=${query}&include_adult=false&language=en-US&page=${page}`,
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
        response: res.data
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "fail", message: error.toString() })
    };
  }
};
