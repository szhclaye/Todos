import { connect } from "react-redux";

import TodoList from "../components/TodoList";
import { toggleTodo, removeTodo } from "../../actionsCreator";
import { FilterTypes } from "../../../constants";

const getVisbleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(t => t.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
const mapStateToProps = state => ({
  todos: getVisbleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: id => dispatch(toggleTodo(id)),
  onRemoveTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
