import React from "react";

import Todo from "./Todo/Todo";

export default function TodoList({ items, handleDeleteItemClick }) {
  return (
    <div className="todos_list">
      <ul>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            handleDeleteItemClick={handleDeleteItemClick}
          />
        ))}
      </ul>
    </div>
  );
}
