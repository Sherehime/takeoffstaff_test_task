import { applyMiddleware, combineReducers, createStore } from "redux";
import contacts from "./contacts";
import application from "./application";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";

let middlewares;

if (process.env.NODE_ENV === "development") {
  middlewares = applyMiddleware(logger, thunk);
} else {
  middlewares = applyMiddleware(thunk);
}

const reducer = combineReducers({ contacts, application });

export const store = createStore(reducer, middlewares);
