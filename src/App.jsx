import React from "react";

import "./styles/reset.css";
import "./styles/typography.css";
import "./App.css";

export default function App() {
  return (
    <div className="todoapp">
      <h1 className="h1">To Do</h1>
      <div className="todos">
        <div className="todos__number-of-items">Number of items:</div>
        <div className="todos_list"></div>
        <div className="todos_add-item-btn">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
