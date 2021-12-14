const { createClient } = require('./clients.service');

module.exports.handler = async (event) => {
  try {
    console.log('****1111', JSON.parse(event.body), '****');
    const client = await createClient(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(client),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
