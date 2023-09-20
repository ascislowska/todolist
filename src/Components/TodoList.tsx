import React, { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TodoListContext } from "../contexts/todoList-context";

import Task from "./Task";
import { Filters, ITask } from "../Interfaces";
interface TodoListProps {
  filter: Filters;
  // todoList: ITask[];
  // setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}
// const TodoList = ({ filter, todoList, setTodoList }: TodoListProps) => {
const TodoList = ({ filter }: TodoListProps) => {
  const { todoList, setTodoList } = useContext(TodoListContext);
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

  const onDragEnd = (result: any) => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="mainDroppable">
        {(provided) => (
          <div
            className="todolist"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredList.length > 0 &&
              filteredList.map((task, index) => (
                <Draggable
                  key={task.taskId}
                  draggableId={task.taskId}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        key={task.taskId}
                        task={task}
                        index={index}
                        // todoList={todoList}
                        // setTodoList={setTodoList}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
