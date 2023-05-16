import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Task from "./Task";
import { ITask } from "../Interfaces";
interface TodoListProps {
  filter: string;
  todoList: ITask[];
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const TodoList = ({ filter, todoList, setTodoList }: TodoListProps) => {
  const filteredList = todoList.filter((task) => {
    switch (filter) {
      case "todo": {
        return task.done === false;
      }
      case "done": {
        return task.done === true;
      }
      case "all": {
        return task;
      }
    }
  });
  return (
    <DragDropContext>
      <Droppable droppableId="list">
        <div className="todolist">
          {filteredList.length > 0 &&
            filteredList.map((task, index) => (
              <Task
                key={task.taskId}
                task={task}
                index={index}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))}
        </div>
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
