module.exports.healthCheck = async (event) => ({
  statusCode: 200,
  body: JSON.stringify({ message: 'healthCheck Ok', input: event }),
});
