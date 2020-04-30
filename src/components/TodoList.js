import React from "react";
import Todo from "./Todo";

// TodoList
// takes todos [], boundOnClick
// ul, maps thru [todos] to create Todo component
// Todo components pars same as TodoList pars

const TodoList = ({ todos, boundToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            onClick={() => boundToggleTodo(index)}
            completed={todo.completed}
            text={todo.text}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
