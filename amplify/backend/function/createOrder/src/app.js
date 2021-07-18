/* Amplify Params - DO NOT EDIT
	API_SHEOUTBE_GRAPHQLAPIENDPOINTOUTPUT
	API_SHEOUTBE_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
var AWS = require("aws-sdk");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;
const https = require("https");
const urlParse = require("url").URL;

const region = process.env.REGION;
const appsyncUrl = process.env.API_SHEOUTBE_GRAPHQLAPIENDPOINTOUTPUT;
const endpoint = new urlParse(appsyncUrl).hostname.toString();

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/item", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/item/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/item", async function (req, res) {
  const createOrderMutation = gql`
    mutation CreateOrder(
      $input: CreateOrderInput!
      $condition: ModelOrderConditionInput
    ) {
      createOrder(input: $input, condition: $condition) {
        id
        userEmail
        owner
        createdAt
      }
    }
  `;

  const item = {
    input: {
      userEmail: req.body.userEmail,
      owner: req.headers.username,
    },
  };

  const request = new AWS.HttpRequest(appsyncUrl, region);

  request.method = "POST";
  request.path = "/graphql";
  request.headers.host = endpoint;
  request.headers["Content-Type"] = "application/json";
  request.body = JSON.stringify({
    query: print(createOrderMutation),
    operationName: "CreateOrder",
    variables: item,
  });

  const signer = new AWS.Signers.V4(request, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  const orderSaved = await new Promise((resolve, reject) => {
    const httpRequest = https.request(
      { ...request, host: endpoint },
      (result) => {
        result.on("data", (data) => {
          resolve(JSON.parse(data.toString()));
        });
      }
    );

    httpRequest.write(request.body);
    httpRequest.end();
  });

  res.json({ success: "post call succeed!", url: req.url, body: orderSaved });
});

app.post("/saveProductToOrder", async function (req, res) {
  const createOrderProductMutation = gql`
    mutation CreateOrderProduct(
      $input: CreateOrderProductInput!
      $condition: ModelOrderProductConditionInput
    ) {
      createOrderProduct(input: $input, condition: $condition) {
        id
        productId
        orderId
        quantity
        owner
        createdAt
        updatedAt
        product {
          id
          name
          pictureUrl
          price
          createdAt
          updatedAt
        }
        order {
          id
          userEmail
          owner
          createdAt
          updatedAt
        }
      }
    }
  `;

  const product = req.body.product;
  const quantity = req.body.quantity;
  const orderId = req.body.orderId;

  const createOrderProductRequest = new AWS.HttpRequest(appsyncUrl, region);
  createOrderProductRequest.method = "POST";
  createOrderProductRequest.path = "/graphql";
  createOrderProductRequest.headers.host = endpoint;
  createOrderProductRequest.headers["Content-Type"] = "multipart/form-data";
  createOrderProductRequest.body = JSON.stringify({
    query: print(createOrderProductMutation),
    operationName: "CreateOrderProduct",
    variables: {
      input: {
        orderId,
        productId: product.id,
        quantity,
        owner: req.headers.username,
      },
    },
  });

  const signer = new AWS.Signers.V4(createOrderProductRequest, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  const createProductOperation = new Promise((resolve, reject) => {
    const httpRequest = https.request(
      { ...createOrderProductRequest, host: endpoint },
      (result) => {
        result.on("data", (data) => {
          resolve(JSON.parse(data.toString()));
        });
      }
    );

    httpRequest.write(createOrderProductRequest.body);
    httpRequest.end();
  });

  const result = await createProductOperation;

  res.json({ success: "post call succeed!", url: req.url, body: result });
});

/****************************
 * Example put method *
 ****************************/

app.put("/item", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/item/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/item", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/item/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
