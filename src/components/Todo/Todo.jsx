import React, { useState, useRef } from "react";

export default function Todo({
  item,
  handleDeleteItemClick,
  handleSaveChangesClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.content);
  const editInputRef = useRef(null);
  const editBtn = useRef(null);

  function handleEditClick() {
    setIsEditing(true);
    setTimeout(() => editInputRef.current.focus(), 350);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setNewItem(item.content);
    setTimeout(() => editBtn.current.focus(), 350);
  }

  function handleSaveClick(item, newItem) {
    setIsEditing(false);
    handleSaveChangesClick(item, newItem);
    setTimeout(() => editBtn.current.focus(), 350);
  }

  function editTodo() {
    return (
      <li>
        <input
          type="text"
          value={newItem}
          ref={editInputRef}
          aria-label="Edit"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => handleSaveClick(item, newItem)}>Save</button>
        <button aria-label="Cancel" onClick={handleCancelClick}>
          X
        </button>
      </li>
    );
  }

  function showTodo() {
    return (
      <li id={item.id}>
        {item.content}
        <button onClick={handleEditClick} ref={editBtn}>
          Edit
        </button>
        <button
          aria-label="Delete"
          onClick={() => handleDeleteItemClick(item.id)}
        >
          X
        </button>
      </li>
    );
  }

  return isEditing === false ? showTodo() : editTodo();
}
