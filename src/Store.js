import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import { reducer as todoReducer } from "./todos";
import { reducer as filterReducer } from "./filter";
import { reducer as weatherReducer } from './weathers';

import Perf from "react-addons-perf";

const win = window;
win.Perf = Perf;

const reducers = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer,
  weatherOfCity:weatherReducer
});
// state.todos   state.visibilityFilter

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(require("redux-immutable-state-invariant")());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f
);

export default createStore(reducers, {}, storeEnhancers);
