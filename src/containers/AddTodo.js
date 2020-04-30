import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

// creating form w input & button
// onClick that dispatch input curr val. to addTodo action creator
// form will be in function / component AddTodo inside of a div (takes 1 arg, dispatch)
// curry to the connect function (will not have any args.) < - saved in var. addTodo

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input type="text" ref={(node) => (input = node)} />
        <button type="submit">Add To List</button>
      </form>
    </div>
  );
};

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;
