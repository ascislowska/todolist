import React from "react";
import { ITask } from "../Interfaces";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { playSound } from "../utils/playSound";
interface TaskProps {
  task: ITask;
  index: number;
  todoList: ITask[];
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const Task = ({ task, index, todoList, setTodoList }: TaskProps) => {
  const completeTask = () => {
    playSound("positive");
    setTodoList(
      todoList.map((element, i) =>
        i === index ? { ...element, done: true } : element
      )
    );
  };

  const deleteTask = () => {
    setTodoList(todoList.filter((element) => element.taskId !== task.taskId));
    playSound("negative");
  };

  return (
    <div className="task">
      <p className="content">{task.taskName}</p>
      <div className="info">
        <p>{task.deadline}</p>
        <div className="button-wrapper">
          <button onClick={completeTask}>
            <BsCheckLg />
          </button>
          <button onClick={deleteTask}>
            <BsXLg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
