import React, { useState, useEffect } from "react";

import "./styles/reset.css";
import "./styles/typography.css";
import "./App.css";

export default function App(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.data);
  }, []);

  const showListItems = () => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="todoapp">
      <h1 className="h1">To Do</h1>
      <div className="todos">
        <div className="todos__number-of-items">Number of items:</div>
        <div className="todos_list">{showListItems()}</div>
        <div className="todos_add-item-btn">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
