import { FilterButton } from "./FilterButton";

export function FilterButtons() {
  return (
    <div className="flex justify-center gap-1">
      <FilterButton label="All" filterValue="all" />
      <FilterButton label="Active" filterValue="active" />
      <FilterButton label="Completed" filterValue="completed" />
    </div>
  );
}
