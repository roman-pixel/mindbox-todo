import { FilterType } from "../types";
import { FilterButton } from "./FilterButton";

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: FilterType) => void;
}

export function FilterButtons({ filter, setFilter }: FilterButtonsProps) {
  return (
    <div className="flex justify-center gap-1">
      <FilterButton
        label="All"
        filterValue="all"
        filter={filter}
        setFilter={setFilter}
      />
      <FilterButton
        label="Active"
        filterValue="active"
        filter={filter}
        setFilter={setFilter}
      />
      <FilterButton
        label="Completed"
        filterValue="completed"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}
