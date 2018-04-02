import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createHistory from 'history/createBrowserHistory';
import { routerReducer,routerMiddleware } from 'react-router-redux';  /** 引入react router */

import { reducer as todoReducer } from "./todos";
import { reducer as filterReducer } from "./filter";

import Perf from "react-addons-perf";

const win = window;
win.Perf = Perf;

const reducers = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer,
  router:routerReducer
});
// state.todos   state.visibilityFilter

const middlewares = [routerMiddleware(history)];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(require("redux-immutable-state-invariant")());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f
);

export default createStore(reducers, {}, storeEnhancers);
