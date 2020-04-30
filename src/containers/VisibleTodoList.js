import { connect } from "react-redux";
import { toggleTodo } from "../actions";

// 1) wrapper - middleman b/w Redux store & presentation component
// subscription thru connect
// define mapStateToProps & mapDispatchToProps
// mstp -> only gives todos for corresponding visibility filter
// mdtp -> returns bound dispatch function calling toggleToDo
// pass mapStateToProps & mapDispatchToProps to connect function
// curry TodoList

// function mapDispatchToProps(dispatch) {
//     return (
//         dispatch(toggleTodo(index))
//         boundToggleTodo
//     )
// }

// 2) function that returns a list of todos based on current state's value of visibility filter
