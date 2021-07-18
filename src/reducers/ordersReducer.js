import {
  GET_ORDERS,
  GET_ORDERS_RECIEVED,
  VIEW_ORDER,
  FETCH_ORDER_RECIEVED,
} from "../actions/actionsTypes";

export const orders = (
  state = { orders: [], order: {}, orderDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_ORDERS: {
      return {
        ...state,
        orders: [],
      };
    }
    case GET_ORDERS_RECIEVED: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case VIEW_ORDER: {
      return {
        ...state,
        order: action.payload,
      };
    }
    case FETCH_ORDER_RECIEVED: {
      return {
        ...state,
        orderDetails: action.payload,
      };
    }

    default:
      return state;
  }
};
