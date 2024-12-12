import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

import { FilterType } from "../types";

interface FilterButtonProps {
  label: string;
  filterValue: FilterType;
}

export function FilterButton({ label, filterValue }: FilterButtonProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsKey = "filter";

  const handleClick = () => {
    setSearchParams((prevParams) => {
      prevParams.set(searchParamsKey, filterValue);
      return prevParams;
    });
  };

  return (
    <button
      className={clsx(
        `rounded border border-transparent px-2 py-1 transition-all duration-300 hover:text-slate-700`,
        {
          "!border-red-500/40":
            searchParams.get(searchParamsKey) === filterValue,
        },
      )}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
