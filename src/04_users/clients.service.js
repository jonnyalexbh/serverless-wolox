const DYNAMODB = require('aws-sdk/clients/dynamodb');

const db = new DYNAMODB.DocumentClient({ region: 'us-east-1' });
const TABLE_NAME = 'users_table';

exports.createClient = (client) => {
  const params = {
    TableName: TABLE_NAME,
    Item: client,
  };
  return db
    .put(params)
    .promise()
    .then(() => params.Item)
    .catch(() => {
      throw new Error('An error occurred while trying to create the client');
    });
};
