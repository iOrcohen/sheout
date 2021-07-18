const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");

const server = awsServerlessExpress.createServer(app);

exports.handler = async (event, context) => {
  const userName = extractUsername(event);

  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`UserName: ${userName}`);

  if (!!userName) {
    event.headers.username = userName;
  }

  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};

const extractUsername = (event) => {
  const identity = event.requestContext && event.requestContext.identity;
  if (!identity) {
    return null;
  }

  const cognitoString = identity.cognitoAuthenticationProvider;
  return cognitoString && cognitoString.split("CognitoSignIn:")[1];
};
