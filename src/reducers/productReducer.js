import {
  VIEW_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_RECIEVED,
} from "../actions/actionsTypes";

export const product = (
  state = { products: [], product: {}, quantity: 1 },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: [],
      };
    }
    case GET_PRODUCTS_RECIEVED: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case VIEW_PRODUCT: {
      return {
        ...state,
        product: action.payload.product,
        quantity: action.payload.quantity,
      };
    }

    default:
      return state;
  }
};
