import React, { useState, useEffect, useRef } from "react";

import "./styles/reset.css";
import "./styles/typography.css";
import "./App.css";

import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

import { nanoid } from "nanoid";

export default function App(props) {
  const [items, setItems] = useState([]);
  const [showNewItem, setShowNewItem] = useState(false);
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(null);
  const addBtnRef = useRef(null);

  useEffect(() => {
    setItems(props.data);
  }, []);

  useEffect(() => {
    if (showNewItem === true) {
      inputRef.current.focus();
    }
  }, [showNewItem]);

  function handleAddClick(e) {
    setShowNewItem(true);
  }

  function handleCloseClick() {
    setShowNewItem(false);
    setTimeout(() => addBtnRef.current.focus());
  }

  function handleSaveChangesClick(item, newItem) {
    const { id } = item;
    const itemToUpdate = items.filter((item) => item.id === id)[0];
    const itemToUpdateObj = { ...itemToUpdate, content: newItem };
    const itemsUpdated = items.map((item) =>
      item.id === id ? itemToUpdateObj : item
    );
    setItems(itemsUpdated);
  }

  function handleAddItemClick(e) {
    e.preventDefault();

    if (newItem) {
      const newId = `todo-${nanoid()}`;
      console.log(newId);
      const newItemObj = { id: newId, content: newItem, completed: false };
      setItems([...items, newItemObj]);
      setNewItem("");
    }
  }

  function handleDeleteItemClick(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const findPositionInItems = items.findIndex((item) => item.id === id);

    if (updatedItems.length) {
      if (findPositionInItems === items.length - 1) {
        const nextItem = items[findPositionInItems - 1];
        document.getElementById(nextItem.id).querySelector("button").focus();
        return;
      }

      const nextItem = items[findPositionInItems + 1];
      document.getElementById(nextItem.id).querySelector("button").focus();
      return;
    }

    addBtnRef.current.focus();
  }

  return (
    <div className="todoapp">
      <h1 className="h1">To Do</h1>
      <div className="todos">
        <div className="todos__number-of-items">
          Number of items: {items.length}
        </div>
        <TodoList
          items={items}
          handleDeleteItemClick={handleDeleteItemClick}
          handleSaveChangesClick={handleSaveChangesClick}
        />
        {!showNewItem && (
          <div className="todos_add-item-btn">
            <button onClick={handleAddClick} ref={addBtnRef}>
              Add
            </button>
          </div>
        )}
        {showNewItem && (
          <>
            <AddItem
              newItem={newItem}
              setNewItem={setNewItem}
              inputRef={inputRef}
              handleAddItemClick={handleAddItemClick}
            />
            <button aria-label="Close" onClick={handleCloseClick}>
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
}
