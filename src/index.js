import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./Store.js";
import TodoApp from "./TodoApp";
import "./reset.css";

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
