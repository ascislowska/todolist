import React, { useState } from "react";
import { ITask } from "../Interfaces";
import { playSound } from "../utils/playSound";

interface AddProps {
  todoList: ITask[];
  setTodoList: (argument: ITask[] | ((prevList: ITask[]) => ITask[])) => void;
}
const Add: React.FC<AddProps> = ({ setTodoList, todoList }) => {
  const emptyTask = {
    taskName: "",
    done: false,
    taskId: "0",
  };
  const [newTask, setNewTask] = useState<ITask>(emptyTask);

  const updateNewTask = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ): void => {
    setNewTask({ ...newTask, [key]: event.target.value });
  };

  const addTask = (): void => {
    if (newTask.taskName) {
      setTodoList((prevList: ITask[]) => [
        ...prevList,
        {
          ...newTask,
          taskId:
            todoList.length === 0
              ? "1"
              : Number(todoList[todoList.length - 1].taskId) + 1 + "",
        },
      ]);
      setNewTask(emptyTask);
      playSound("positive");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="to do"
        className="task-input"
        onChange={(e) => updateNewTask(e, "taskName")}
        onKeyDown={(e) => (e.key === "Enter" ? addTask() : null)}
        value={newTask.taskName}
      />
      <div className="details">
        <input
          type="date"
          placeholder="deadline"
          className="deadline-input"
          onChange={(e) => updateNewTask(e, "deadline")}
          onKeyDown={(e) => (e.key === "Enter" ? addTask() : null)}
        />
        <button
          onClick={addTask}
          className={`${newTask.taskName ? "" : "disabled"}`}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default Add;
