import { GET_PRODUCTS } from "../actions/actionsTypes";
import { fetchProductsRecieved } from "../actions/productActions";
import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

const fetchProductsEpic = (action$) =>
  action$.pipe(
    ofType(GET_PRODUCTS),
    mergeMap(() =>
      from(API.graphql({ query: queries.listProducts })).pipe(
        map(({ data }) => data?.listProducts?.items),
        map((response) => fetchProductsRecieved(response))
      )
    )
  );

export { fetchProductsEpic };
