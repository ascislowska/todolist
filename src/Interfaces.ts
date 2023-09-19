export interface ITask {
  taskName: string;
  deadline?: string | null;
  done: boolean;
  taskId: number;
}
export type Filters = "todo" | "done" | "all";
export type Sounds = "positive" | "negative";
export type Themes = "light" | "dark";
