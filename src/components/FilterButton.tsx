import clsx from "clsx";

import { FilterType } from "../types";

interface FilterButtonProps {
  label: string;
  filterValue: FilterType;
  filter: string;
  setFilter: (filter: FilterType) => void;
}

export function FilterButton({
  label,
  filterValue,
  filter,
  setFilter,
}: FilterButtonProps) {
  return (
    <button
      className={clsx(
        `rounded border border-transparent px-2 py-1 transition-all duration-300 hover:text-slate-700`,
        {
          "!border-red-500/40": filter === filterValue,
        },
      )}
      onClick={() => setFilter(filterValue)}
    >
      {label}
    </button>
  );
}
