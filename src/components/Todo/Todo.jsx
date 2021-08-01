import React from "react";

export default function Todo({ item, handleDeleteItemClick }) {
  return (
    <li id={item.id}>
      {item.content}
      <button
        aria-label="Delete"
        onClick={() => handleDeleteItemClick(item.id)}
      >
        X
      </button>
    </li>
  );
}
