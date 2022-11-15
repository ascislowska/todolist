import React from "react";
import { ITask } from "../Interfaces";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
interface Props {
  task: ITask;
  completeTask(taskId: number): void;
  deleteTask(taskId: number): void;
}
const TodoTask = ({ task, completeTask, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">{task.taskName}</div>
      <div className="info">
        <span>{task.taskDeadline}</span>
        <div className="button-wrapper">
          <button
            onClick={() => completeTask(task.taskId)}
            className={task.done ? "disabled" : ""}
          >
            <IoCheckmarkOutline />
          </button>
          <button onClick={() => deleteTask(task.taskId)}>
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
