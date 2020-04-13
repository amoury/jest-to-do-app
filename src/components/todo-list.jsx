import React from "react";

const TodoList = ({ todos, completed }) => {
  return (
    <div
      className="ui middle aligned divided list todo-list"
      data-testid="todo-list"
    >
      {todos.map((todo) => (
        <div
          className="item list-item"
          data-testid="todo-item"
          key={todo.id}
          onClick={() => completed(todo.id)}
        >
          <div className="right floated content">
            <div className="ui button">Add</div>
          </div>
          <div className="content">{todo.content}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
