import clsx from "clsx";

interface TodoItemProps {
  label: string;
  completed: boolean;
  onChange: () => void;
  onDelete: () => void;
}

export function TodoItem({
  label,
  completed,
  onChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="group relative flex items-center justify-between border-b border-slate-200 py-3 pl-12 pr-4 text-xl last:border-0 sm:py-4 sm:text-2xl">
      <label className="absolute left-2 top-1/2 -translate-y-1/2">
        <input
          data-testid="todo-checkbox"
          type="checkbox"
          checked={completed}
          onChange={onChange}
          className="h-0 w-0 cursor-pointer opacity-0"
        />
        <span className="absolute left-0 top-0 h-[25px] w-[25px] rounded-full border border-gray-300 sm:h-[30px] sm:w-[30px]">
          <span
            className={clsx(
              `absolute inset-0 flex select-none items-center justify-center text-lg text-teal-500 sm:text-xl`,
              {
                hidden: !completed,
              },
            )}
          >
            ✓
          </span>
        </span>
      </label>
      <span
        className={clsx(`break-all text-slate-800/90`, {
          "text-slate-800/40 line-through": completed,
        })}
      >
        {label}
      </span>
      <button
        className="delete-button rounded-full p-1 text-slate-600 transition-all duration-300 hover:bg-slate-100 group-hover:opacity-100"
        onClick={onDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}
