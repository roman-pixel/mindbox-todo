import clsx from "clsx";
import { useState } from "react";

import { Todo } from "../types";

interface TodoAddProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export function TodoAdd({
  todos,
  setTodos,
  isExpanded,
  setIsExpanded,
}: TodoAddProps) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
          text,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="relative flex items-center shadow-sm">
      <button
        className={clsx(
          `h-9 w-16 text-2xl text-slate-600 transition-transform duration-200`,
          {
            "rotate-90 text-slate-600/70": isExpanded,
          },
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        ❯
      </button>
      <input
        data-testid="add-todo-input"
        className="grow p-4 text-2xl placeholder:font-extralight placeholder:italic placeholder:text-slate-400/50"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo(inputValue)}
        placeholder="What needs to be done?"
      />
      {inputValue && (
        <button
          data-testid="add-todo-button"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-xl leading-10 text-slate-600/70 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-600"
          onClick={() => addTodo(inputValue)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      )}
    </div>
  );
}
