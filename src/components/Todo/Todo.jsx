import React from "react";

export default function Todo({ item, handleDeleteItemClick }) {
  return (
    <li>
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
