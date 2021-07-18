/* Amplify Params - DO NOT EDIT
	ANALYTICS_SHEOUTBE4BLST_ID
	ANALYTICS_SHEOUTBE4BLST_REGION
	API_SHEOUTBE_GRAPHQLAPIENDPOINTOUTPUT
	API_SHEOUTBE_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const pinpoint = new AWS.Pinpoint({
  region: process.env.ANALYTICS_SHEOUTBE4BLST_REGION,
});
const appId = process.env.ANALYTICS_SHEOUTBE4BLST_ID;

var body_html = `<html>
<head></head>
<body>
  <h1>Your clothes order confirmed</h1>
  <p>Tithadesh</p>
</body>
</html>`;

var body_text = `Amazon Pinpoint Test (SDK for JavaScript in Node.js)
----------------------------------------------------
This email was sent with Amazon Pinpoint using the AWS SDK for JavaScript in Node.js.
For more information, see https://aws.amazon.com/sdk-for-node-js/`;

exports.handler = async (event) => {
  //eslint-disable-line
  let insertRecord = {};
  event.Records.forEach((record) => {
    console.log("DynamoDB Record: %j", record.dynamodb);

    if (record.eventName === "INSERT") {
      insertRecord = record;
    }
  });

  const email = insertRecord.dynamodb.NewImage.userEmail.S;

  const params = {
    ApplicationId: appId,
    MessageRequest: {
      Addresses: {
        [email]: {
          ChannelType: "EMAIL",
        },
      },
      MessageConfiguration: {
        EmailMessage: {
          FromAddress: "or@get-grin.com",
          SimpleEmail: {
            Subject: {
              Charset: "UTF-8",
              Data: "Your order confirmation",
            },
            HtmlPart: {
              Charset: "UTF-8",
              Data: body_html,
            },
            TextPart: {
              Charset: "UTF-8",
              Data: body_text,
            },
          },
        },
      },
    },
  };

  await pinpoint.sendMessages(params).promise();

  return Promise.resolve("Successfully processed DynamoDB record");
};
