import React from "react";
import { view as Todos } from "./todos";
import { view as Filter } from "./filter";

const styles = {
    marginTop:'50px',
    fontSize:'40px',
    textAlign:'center'
}

const TodoApp = () => (
  <div>
    <h1 style={styles}>Todos</h1>
    <Todos />
    <Filter />
  </div>
);

export default TodoApp;
