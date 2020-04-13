import React from "react";
import AddTodo from "./components/add-todo";
import "./App.css";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = React.useState([]);

  const addNewItem = (item) => {
    setTodos([...todos, item]);
  };

  const markCompleted = (itemId) => {
    setTodos([...todos].filter((todo) => todo.id !== itemId));
  };

  return (
    <div className="App">
      <AddTodo add={addNewItem} />
      <TodoList completed={markCompleted} todos={todos} />
    </div>
  );
}

export default App;
