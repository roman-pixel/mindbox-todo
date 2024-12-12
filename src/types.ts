export type FilterType = "all" | "active" | "completed";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
