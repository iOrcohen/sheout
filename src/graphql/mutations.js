/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrderProduct = /* GraphQL */ `
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
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
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
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
