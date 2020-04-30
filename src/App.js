import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import run from "./store";
import VisibleTodoList from "./containers/VisibleTodoList";

function App() {
  console.log(run);
  useEffect(() => {
    run();
  }, []);
  return (
    <div className="App">
      <VisibleTodoList />
    </div>
  );
}

export default App;
