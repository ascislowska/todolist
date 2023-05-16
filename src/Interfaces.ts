export interface ITask {
  taskName: string;
  deadline?: string | null;
  done: boolean;
  taskId: number;
}
