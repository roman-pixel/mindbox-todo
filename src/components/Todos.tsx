import { Todo } from "../types";
import { TodoItem } from "./TodoItem";

interface TodosProps {
  filteredTodos: Todo[];
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export function Todos({ filteredTodos, todos, setTodos }: TodosProps) {
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="border-t border-slate-200">
      {filteredTodos.length ? (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            label={todo.text}
            completed={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))
      ) : (
        <div className="py-4 text-center text-2xl text-slate-600/50">
          No todos found
        </div>
      )}
    </div>
  );
}