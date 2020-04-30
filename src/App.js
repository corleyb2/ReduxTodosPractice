import React from "react";
import "./App.css";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodoContainer from "./containers/AddTodo";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <AddTodoContainer />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
