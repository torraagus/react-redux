import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import postSaga from "./sagas/post";
import allReducers from "./reducers";
import App from "./App";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// then run the saga
sagaMiddleware.run(postSaga);
