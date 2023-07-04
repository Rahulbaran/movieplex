import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export const handler = event => {
  const show_id = event.queryStringParameters.show_id;
  console.log(show_id);

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success"
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "fail"
      })
    };
  }
};
