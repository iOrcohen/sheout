import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import epic from "./epics";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(epic);

  return store;
};

export const store = configureStore();
