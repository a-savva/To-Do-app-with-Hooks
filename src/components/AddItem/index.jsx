import React from "react";

import "./styles.css";

export default function AddItem({
  newItem,
  setNewItem,
  inputRef,
  handleAddItemClick,
}) {
  return (
    <form onSubmit={handleAddItemClick}>
      <label htmlFor="new-item">New item:</label>
      <input
        type="text"
        id="new-item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        ref={inputRef}
      />
      <button className="btn add-btn">Add</button>
    </form>
  );
}
