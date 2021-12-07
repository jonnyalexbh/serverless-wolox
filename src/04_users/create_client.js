const { createClient } = require('./clients.service');

module.exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    await createClient(body);
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
