/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct($owner: String) {
    onCreateOrderProduct(owner: $owner) {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct($owner: String) {
    onUpdateOrderProduct(owner: $owner) {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct($owner: String) {
    onDeleteOrderProduct(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
