import { useState, useEffect, FC } from "react";
import { Filters, ITask, Themes } from "./Interfaces";
import TodoList from "./Components/TodoList";
import Add from "./Components/Add";
import "./styles/App.scss";
import Filter from "./Components/Filter";
import { ThemeContext } from "./contexts/theme-context";
import { TodoListContext } from "./contexts/todoList-context";

import ThemeBtn from "./Components/ThemeBtn";

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITask[]>(
    (localStorage.todos && JSON.parse(localStorage.todos)) || []
  );

  const [activeFilter, setActiveFilter] = useState<Filters>("todo");
  const [theme, setTheme] = useState<Themes>(localStorage.theme);

  useEffect(() => {
    return () => {
      localStorage.setItem("todos", JSON.stringify(todoList));
      localStorage.setItem("theme", theme);
    };
  }, [todoList]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <TodoListContext.Provider
        value={{ todoList: todoList, setTodoList: setTodoList }}
      >
        <div className={`app-container theme-${theme}`}>
          <ThemeBtn />
          <div className="app">
            <div className="header">
              <Add setTodoList={setTodoList} todoList={todoList} />
              <Filter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            </div>
            <TodoList
              filter={activeFilter}
              // todoList={todoList}
              // setTodoList={setTodoList}
            />
          </div>
        </div>
      </TodoListContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
