import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "../actions";
import { combineReducers } from "redux";

const { SHOW_ALL } = VisibilityFilters;

//Reducer #1 - Visibiity
function visibilityReducer(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

//Reducer #2 - Todos
//in case TOGGLE_TODO - map through todos in state array, if index passed === index of current todo, it toggles the todo.  Will be passed thru onClick callback (bound dispatch) fn.
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

// Custom function for exporting root reducer (explicit definition):

export default function rootReducer(state = {}, action) {
  return {
    visibilityFilter: visibilityReducer(state.visibilityFilter, action),
    todos: todoReducer(state.todos, action),
  };
}

//Using redux combineReducers
// const rootReducer = combineReducers({
//   todoReducer,
//   visibilityReducer,
// });

// export default rootReducer;
