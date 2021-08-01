import React from "react";

import Todo from "./Todo/Todo";

export default function TodoList({ items }) {
  return (
    <div className="todos_list">
      <ul>
        {items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}