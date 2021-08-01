import React, { useState, useEffect } from "react";

import "./styles/reset.css";
import "./styles/typography.css";
import "./App.css";

import TodoList from "./components/Todo";

export default function App(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.data);
  }, []);

  return (
    <div className="todoapp">
      <h1 className="h1">To Do</h1>
      <div className="todos">
        <div className="todos__number-of-items">Number of items:</div>
        <TodoList items={items} />
        <div className="todos_add-item-btn">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
