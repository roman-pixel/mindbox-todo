import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App";

describe("Todo App", () => {
  test("adds a new todo using Enter key", () => {
    render(<App />);

    const input = screen.getAllByTestId("add-todo-input")[0];
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  test("adds a new todo using save button", () => {
    render(<App />);

    const input = screen.getAllByTestId("add-todo-input")[0];
    fireEvent.change(input, { target: { value: "Test todo" } });

    const saveButton = screen.getByTestId("add-todo-button");
    fireEvent.click(saveButton);

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<App />);

    const input = screen.getAllByTestId("add-todo-input")[0];
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });

    const checkbox = screen.getByTestId("todo-checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText("Test todo")).toHaveClass(
      "text-slate-800/40",
      "line-through",
    );
  });

  test("filters todos correctly", () => {
    render(<App />);

    // Add active todo
    const input = screen.getAllByTestId("add-todo-input")[0];
    fireEvent.change(input, { target: { value: "Active todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });

    // Add completed todo
    fireEvent.change(input, { target: { value: "Completed todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
    const checkboxes = screen.getAllByTestId("todo-checkbox");
    fireEvent.click(checkboxes[1]);

    // Test "Active" filter
    fireEvent.click(screen.getByText("Active"));
    expect(screen.getByText("Active todo")).toBeInTheDocument();
    expect(screen.queryByText("Completed todo")).not.toBeInTheDocument();

    // Test "Completed" filter
    fireEvent.click(screen.getByText("Completed"));
    expect(screen.queryByText("Active todo")).not.toBeInTheDocument();
    expect(screen.getByText("Completed todo")).toBeInTheDocument();

    // Test "All" filter
    fireEvent.click(screen.getByText("All"));
    expect(screen.getByText("Active todo")).toBeInTheDocument();
    expect(screen.getByText("Completed todo")).toBeInTheDocument();
  });

  test("toggles list visibility", () => {
    render(<App />);

    const input = screen.getAllByTestId("add-todo-input")[0];
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });

    const toggleButton = screen.getByText("❯");
    fireEvent.click(toggleButton);

    expect(screen.queryByText("Test todo")).not.toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  test("clears completed todos", () => {
    render(<App />);

    const input = screen.getAllByTestId("add-todo-input")[0];
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    expect(screen.queryByText("Test todo")).not.toBeInTheDocument();
  });
});
