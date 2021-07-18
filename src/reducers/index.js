import { cart } from "./cartReducer";
import { product } from "./productReducer";
import { orders } from "./ordersReducer";
import { combineReducers } from "redux";

export default combineReducers({
  cart,
  product,
  orders,
});
