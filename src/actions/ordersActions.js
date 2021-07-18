import {
  GET_ORDERS,
  GET_ORDERS_RECIEVED,
  FETCH_ORDER_RECIEVED,
} from "./actionsTypes";

const fetchOrders = () => ({
  type: GET_ORDERS,
});

const fetchOrdersRecieved = (payload) => ({
  type: GET_ORDERS_RECIEVED,
  payload,
});

const fetchOrderRecieved = (payload) => ({
  type: FETCH_ORDER_RECIEVED,
  payload,
});

export { fetchOrders, fetchOrdersRecieved, fetchOrderRecieved };
