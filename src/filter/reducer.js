import { SET_TODO_FILTER } from "./actionsType";
import { FilterTypes } from "../constants";

const visibilityFilter = (state = FilterTypes.ALL, action) => {
  switch (action.type) {
    case SET_TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

// 返回的visibilityFilters即是state.visibilityFilters
