import { SET_TODO_FILTER } from "./actionsType";

export const setTodoFilter = filter => ({
  type: SET_TODO_FILTER,
  filter
});
