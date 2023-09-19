import React, { useState } from "react";

const PackingList = ({ parkingItems, handleDelete, handleToggleItem, setParkingItems}) => {
  const [sortBy, setSortBy] = useState("input");

  function handleSelect(e) {
    setSortBy(e.target.value);
  }

  let sortedItems;

  if (sortBy === "input") sortedItems = parkingItems;

  if (sortBy === "description")
    sortedItems = parkingItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = parkingItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClear(){
    if(!parkingItems.length) return alert ("Cannot clear empty packing list")
    const confirm = window.confirm("Are you sure you want to clear your packing list")

    if(confirm)setParkingItems([])
  }


  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <li key={items.id}>
            <input
              type="checkbox"
              value={parkingItems.packed}
              onChange={() => handleToggleItem(items.id)}
            />
            <span
              style={items.packed ? { textDecoration: "line-through" } : {}}
            >
              {items.selectedItem} {items.description}
            </span>
            <button onClick={() => handleDelete(items.id)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={handleSelect}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
