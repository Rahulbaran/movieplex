export const handler = async event => {
  try {
    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
