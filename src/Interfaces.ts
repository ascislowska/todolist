export interface ITask {
  taskId: string;
  taskName: string;
  deadline?: string | null;
  done: boolean;
}
export type Filters = "todo" | "done" | "all";
export type Sounds = "positive" | "negative";
export type Themes = "light" | "dark";
