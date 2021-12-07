module.exports.sum = async (event) => {
  const { num1, num2 } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: num1 + num2, input: event }),
  };
};
