import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../todo-list";

const mockTodos = [
  { id: "1234", content: "hello" },
  { id: "1235", content: "hello bye" },
];

const completed = jest.fn();

test("Works without crashing", () => {
  const { queryByTestId } = render(<TodoList todos={[]} />);
  expect(queryByTestId("todo-item")).not.toBeInTheDocument();
});

test("Displays todos correctly", () => {
  const { getByTestId } = render(<TodoList todos={mockTodos} />);
  const list = getByTestId("todo-list");
  expect(list.children).toHaveLength(2);
});

test("Remove an item from list on click", async () => {
  const { getByTestId, rerender } = render(
    <TodoList completed={completed} todos={mockTodos} />
  );
  const list = getByTestId("todo-list");
  const firstItem = list.firstChild;
  fireEvent.click(firstItem);

  expect(completed).toHaveBeenCalledTimes(1);
  expect(completed).toHaveBeenCalledWith("1234");
  // expect(list.children).toHaveLength(1);
  rerender(<TodoList completed={completed} todos={mockTodos.slice(1)} />);
  expect(list.children).toHaveLength(1);
});
