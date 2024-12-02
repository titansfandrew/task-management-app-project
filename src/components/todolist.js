

import React, { useEffect, useState } from "react";
import "../TodoList.css";

const initialTodoList = [
  { id: 1, name: "item one", completed: false },
  { id: 2, name: "item two", completed: false },
  { id: 3, name: "item three", completed: true },
  { id: 4, name: "item four", completed: false },
  { id: 5, name: "item five", completed: true },
  { id: 6, name: "item six", completed: false },
];

function TodoList({ title }) {
  const [msg, setMsg] = useState("");
  const [txtnewitem, setNewItem] = useState("");
  const [todolist, setTodoList] = useState(initialTodoList);
  const [filtered_todolist, setFilteredTodoList] = useState(initialTodoList);

  useEffect(() => {
    setFilteredTodoList(todolist);
  }, [todolist]);

  const handleAddNewItem = () => {
    if (!txtnewitem.trim()) {
      setMsg("Please enter a valid item");
      return;
    }

    const newItem = { id: Date.now(), name: txtnewitem.trim(), completed: false };
    setTodoList((prev) => [...prev, newItem]);
    setNewItem("");
    setMsg("New item added!");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission or unwanted behavior
      handleAddNewItem();
    }
  };

  const handleReset = () => {
    setNewItem(""); // Clear input field
    setMsg(""); // Clear message
  };

  const handleDeleteItem = (id) => {
    const itemToDelete = todolist.find((item) => item.id === id);
    if (!itemToDelete) return;

    if (window.confirm(`Delete item - ${itemToDelete.name}?`)) {
      setTodoList((prev) => prev.filter((item) => item.id !== id));
      setMsg(`Item deleted: ${itemToDelete.name}`);
    }
  };

  const handleToggleItem = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleFilterChange = (filter) => {
    if (filter === "all") setFilteredTodoList(todolist);
    if (filter === "completed") setFilteredTodoList(todolist.filter((item) => item.completed));
    if (filter === "incomplete") setFilteredTodoList(todolist.filter((item) => !item.completed));
  };

  return (
    <div className="container">
      <h4>{title}</h4>
      <div>
        <span>Add New Task: </span>
        <input
          type="text"
          value={txtnewitem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
          maxLength={25}
          placeholder="* Add new item"
        />
        {" "}
        <button onClick={handleAddNewItem}>Add</button>
        {" "}
        <button onClick={handleReset}>Reset</button> {/* Reset button */}
      </div>
      <p>{msg}</p>
      <div>
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("completed")}>Completed</button>
        <button onClick={() => handleFilterChange("incomplete")}>Incomplete</button>
      </div>
      <div>
        {filtered_todolist.map((item) => (
          <p key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleItem(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.name}
            </span>
            {" "}
            <button onClick={() => handleDeleteItem(item.id)}>Remove</button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default TodoList;