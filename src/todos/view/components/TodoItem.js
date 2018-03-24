import React from "react";

const TodoItem = ({ onToggle, onRemove, text, completed }) => (
  <li style={{ textDecoration: completed ? "line-through" : "none" }}>
    <input
      type="checkbox"
      checked={completed ? "checked" : ""}
      onClick={onToggle}
    />
    <label>{text}</label>
    <button onClick={onRemove}>X</button>
  </li>
);

export default TodoItem;
