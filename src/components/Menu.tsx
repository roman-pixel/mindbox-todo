import { Todo } from "../types";
import { FilterButtons } from "./FilterButtons";

interface MenuProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export function Menu({ todos, setTodos }: MenuProps) {
  const activeTodos = todos.filter((todo) => !todo.completed);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t px-5 py-2 text-sm text-slate-500">
      <span>
        {`${activeTodos.length} item${activeTodos.length > 1 ? "s" : ""} left`}
      </span>

      <FilterButtons />

      {todos.some((todo) => todo.completed) && (
        <button
          className="transition-colors duration-300 hover:text-slate-700"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
