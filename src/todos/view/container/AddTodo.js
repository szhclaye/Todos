import React from "react";
import { connect } from "react-redux";
import  "./addTodo.css";

import { addTodo } from "../../actionsCreator";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="container">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input  className="input_i"
                placeholder="输入待办事项.." 
                ref={node => (input = node)} />
        <button type="submit">添加</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
