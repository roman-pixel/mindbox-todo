import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Menu, TodoAdd, Todos } from "./components";
import { Todos as TodosData } from "./data/todos";
import { Todo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(TodosData);
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("filter")) {
      setSearchParams((prevParams) => {
        prevParams.set("filter", "all");
        return prevParams;
      });
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="flex h-screen justify-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-6xl font-thin text-red-500/40 sm:text-8xl">
          todos
        </h1>
        <div className="relative max-h-max w-[90vw] border-b bg-white shadow-[0_-2px_20px_rgba(0,0,0,0.1)] sm:w-[80vw] md:w-[550px]">
          <TodoAdd
            todos={todos}
            setTodos={setTodos}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />

          {isExpanded && <Todos todos={todos} setTodos={setTodos} />}

          {todos.length > 0 && <Menu todos={todos} setTodos={setTodos} />}

          <div className="absolute -bottom-2 left-1/2 -z-10 h-2 w-[98%] -translate-x-1/2 border-b bg-white shadow-md" />
          <div className="absolute -bottom-4 left-1/2 -z-20 h-2 w-[96%] -translate-x-1/2 border-b bg-white shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default App;
