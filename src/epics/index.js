import { combineEpics } from "redux-observable";
import { fetchProductsEpic } from "./productsEpic";
import { fetchOrdersEpic, fetchOrderEpic } from "./ordersEpic";

export default combineEpics(fetchProductsEpic, fetchOrdersEpic, fetchOrderEpic);
