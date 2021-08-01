import React from "react";

export default function AddItem({ newItem, setNewItem, inputRef }) {
  return (
    <form>
      <label htmlFor="new-item">New item:</label>
      <input
        type="text"
        id="new-item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
}
