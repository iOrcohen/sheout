import { ADD_TO_CART, CLEAR_CART } from "../actions/actionsTypes";

export const cart = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        products: (state.products || []).concat([action.payload]),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        products: [],
      };
    }
    default:
      return state;
  }
};
