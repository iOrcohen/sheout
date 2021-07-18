/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pictureUrl
        price
        createdAt
        updatedAt
        orders {
          items {
            id
            productId
            orderId
            quantity
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      pictureUrl
      price
      createdAt
      updatedAt
      orders {
        items {
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
        nextToken
      }
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
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
        orders {
          items {
            id
            productId
            orderId
            quantity
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      order {
        id
        userEmail
        owner
        createdAt
        updatedAt
        products {
          items {
            id
            productId
            orderId
            quantity
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          orders {
            nextToken
          }
        }
        order {
          id
          userEmail
          owner
          createdAt
          updatedAt
          products {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userEmail
        owner
        createdAt
        updatedAt
        products {
          items {
            id
            productId
            orderId
            quantity
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userEmail
      owner
      createdAt
      updatedAt
      products {
        items {
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
        nextToken
      }
    }
  }
`;
