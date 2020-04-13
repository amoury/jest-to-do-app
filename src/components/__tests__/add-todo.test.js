import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTodo from "../add-todo";

const mockAdd = jest.fn();
jest.mock("uuidv4", () => ({
  uuid: () => "1234",
}));

test("Add new form loading without crashing", () => {
  const { getByLabelText, getByText } = render(<AddTodo add={mockAdd} />);

  const input = getByLabelText(/add/i);
  const submitBtn = getByText(/submit/i);

  fireEvent.change(input, { target: { value: "hello" } });
  fireEvent.click(submitBtn);
  expect(mockAdd).toHaveBeenCalledTimes(1);
  expect(mockAdd).toHaveBeenCalledWith({ id: "1234", content: "hello" });
});
