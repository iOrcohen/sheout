import { GET_ORDERS, VIEW_ORDER } from "../actions/actionsTypes";
import {
  fetchOrdersRecieved,
  fetchOrderRecieved,
} from "../actions/ordersActions";
import { ofType } from "redux-observable";
import { map, mergeMap, pluck } from "rxjs/operators";
import { from } from "rxjs";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";

const fetchOrdersEpic = (action$) =>
  action$.pipe(
    ofType(GET_ORDERS),
    mergeMap(() =>
      from(API.graphql({ query: queries.listOrders })).pipe(
        map(({ data }) => data?.listOrders?.items),
        map((response) => fetchOrdersRecieved(response))
      )
    )
  );

const fetchOrderEpic = (action$) =>
  action$.pipe(
    ofType(VIEW_ORDER),
    pluck("payload"),
    mergeMap((order) =>
      from(
        API.graphql(graphqlOperation(queries.getOrder, { id: order.id }))
      ).pipe(
        map(({ data }) => data?.getOrder),
        map((response) => fetchOrderRecieved(response))
      )
    )
  );

export { fetchOrdersEpic, fetchOrderEpic };
