import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../Interfaces";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { playSound } from "../utils/playSound";
import { TodoListContext } from "../contexts/todoList-context";
interface TaskProps {
  task: ITask;
  // todoList: ITask[];
  // setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
  index: number;
}
// const Task = ({ task, todoList, setTodoList, index }: TaskProps) => {
const Task = ({ task, index }: TaskProps) => {
  const { todoList, setTodoList } = useContext(TodoListContext);
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
    // <Draggable draggableId={task.taskId} index={index}>
    //   {(provided) => (
    <div
      // ref={provided.innerRef}
      id={`task-${task.taskId}`}
      className="task"
      // {...provided.draggableProps}
      // {...provided.draggableProps}
    >
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
    // )}
    // </Draggable>
  );
};

export default Task;
