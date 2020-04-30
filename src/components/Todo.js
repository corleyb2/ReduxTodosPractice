import React from "react";

// 3 args. OnClick, Completed boo., text (des)
// each todo is JSX li w onClick calling passed-in onClick
// css style - item if completed true, linethru; otherwise, unstyled
// each item renders text passed in

const Todo = ({ boundOnClick, completed, text }) => {
  return (
    <li
      onClick={boundOnClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

export default Todo;
