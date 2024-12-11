import React, { useState } from "react";

import { Menu, TodoAdd, Todos } from "./components";
import { Todo, FilterType } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [isExpanded, setIsExpanded] = useState(true);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="flex h-screen justify-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-8xl font-thin text-red-500/40">
          todos
        </h1>
        <div className="relative max-h-max w-[550px] border-b bg-white shadow-[0_-2px_20px_rgba(0,0,0,0.1)]">
          <TodoAdd
            todos={todos}
            setTodos={setTodos}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />

          {isExpanded && (
            <Todos
              filteredTodos={filteredTodos}
              todos={todos}
              setTodos={setTodos}
            />
          )}

          {todos.length > 0 && (
            <Menu
              filter={filter}
              setFilter={setFilter}
              todos={todos}
              setTodos={setTodos}
            />
          )}

          <div className="absolute -bottom-2 left-1/2 -z-10 h-2 w-[98%] -translate-x-1/2 border-b bg-white shadow-md"></div>
          <div className="absolute -bottom-4 left-1/2 -z-20 h-2 w-[96%] -translate-x-1/2 border-b bg-white shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
