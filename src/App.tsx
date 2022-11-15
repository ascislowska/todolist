import { FC, ChangeEvent, useState, useEffect, useCallback } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";
import Filter from "./Components/Filter";

const App: FC = () => {
  const today: string = new Date().toLocaleDateString();

  //single taks
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>(today);
  //animation of clicking button on touch screens
  const [duringClick, setduringClick] = useState<boolean>(false);
  //list of tasks
  const [todoList, setTodoList] = useState<ITask[]>([]);
  //filtering
  const [tasksToShow, setTasksToShow] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<string>("to do");

  //Single task managment
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = event;
    if (name === "task") {
      setTask(value);
    } else if (name === "deadline") {
      setDeadline(value);
    }
  };
  const addTask = (): void => {
    const newTask = {
      taskName: task,
      taskDeadline: deadline,
      taskId:
        todoList.length === 0 ? 0 : todoList[todoList.length - 1].taskId + 1,
      done: false,
    };
    setTodoList([...todoList, newTask]);
    //cleanup the state of a  new task
    setTask("");
    setDeadline(today);
    //animation of clicking button on touch screens
    setduringClick(true);
    setTimeout(() => setduringClick(false), 300);
  };

  const completeTask = (taskId: number): void => {
    const completedTask = todoList.find((element) => element.taskId === taskId);
    completedTask && (completedTask.done = true);
    filterTasks();
  };
  const deleteTask = (taskId: number): void => {
    const newList = todoList.filter((task) => task.taskId !== taskId);
    setTodoList(newList);
  };

  const filterTasks = useCallback((): void => {
    switch (filter) {
      case "all":
        setTasksToShow(todoList);
        break;
      case "to do":
        setTasksToShow(todoList.filter((task) => task.done === false));
        break;
      case "done":
        setTasksToShow(todoList.filter((task) => task.done === true));
        break;
      default:
    }
  }, [todoList, filter]);

  useEffect(() => filterTasks(), [todoList, filter, filterTasks]);

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="My task..."
          name="task"
          value={task}
          onChange={handleChange}
          className="task-input"
        />
        <div className="task-options">
          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            value={deadline}
            className="deadline-input"
          />
          <button onClick={addTask} className={duringClick ? "clicked" : ""}>
            Add task
          </button>
        </div>
      </div>
      <Filter setFilter={setFilter} filter={filter} />
      <div className="todolist">
        {tasksToShow.map((task: ITask, key: number) => {
          return (
            <TodoTask
              key={key}
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
