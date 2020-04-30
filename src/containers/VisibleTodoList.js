import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";
import TodoList from "../components/TodoList";
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

// 1) wrapper - middleman b/w Redux store & presentation component
// subscription thru connect
// define mapStateToProps & mapDispatchToProps
// mstp -> only gives todos for corresponding visibility filter
// mdtp -> returns bound dispatch function calling toggleToDo
// pass mapStateToProps & mapDispatchToProps to connect function
// curry TodoList

function mapDispatchToProps(dispatch) {
  return {
    boundToggleTodo: (index) => dispatch(toggleTodo(index)),
  };
}

function mapStateToProps(state) {
  return { todos: getVisibleTodos(state) };
}

// 2) function that returns a list of todos based on current state's value of visibility filter

function getVisibleTodos(state) {
  switch (state.visibilityReducer) {
    case SHOW_ALL:
      return state.todos;
    case SHOW_COMPLETED:
      return state.todos.filter((todo) => todo.completed);
    case SHOW_ACTIVE:
      return state.todos.filter((todo) => !todo.completed);
    default:
      return state.todos;
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
