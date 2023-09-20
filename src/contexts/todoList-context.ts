import { createContext } from "react";
import { ITask } from "../Interfaces";
export const TodoListContext = createContext<{
  todoList: ITask[];
  setTodoList: (todoList: ITask[]) => void;
}>({ todoList: [], setTodoList: () => {} });
