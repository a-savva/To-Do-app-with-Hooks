import React from "react";

export default function TodoList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}
