import { GET_PRODUCTS, GET_PRODUCTS_RECIEVED } from "./actionsTypes";

const fetchProducts = () => ({
  type: GET_PRODUCTS,
});

const fetchProductsRecieved = (payload) => ({
  type: GET_PRODUCTS_RECIEVED,
  payload,
});

export { fetchProducts, fetchProductsRecieved };
