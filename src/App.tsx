import { useState, FC } from "react";
import { Filters, ITask } from "./Interfaces";
import TodoList from "./Components/TodoList";
import Add from "./Components/Add";
import "./styles/App.scss";
import Filter from "./Components/Filter";

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filters>("todo");

  return (
    <div className="app">
      <div className="header">
        <Add setTodoList={setTodoList} todoList={todoList} />
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <TodoList
        filter={activeFilter}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default App;
