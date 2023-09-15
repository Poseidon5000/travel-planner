import React from "react";

const PackingList = ({ parkingItems }) => {
  return (
    <div className="list">
      <ul>
        {parkingItems.map(items => 
        <li key={items.id}>
            <span style={items.packed ? {textDecoration: "line-through"}: {}}>
                {items.selectedItem} {items.description}
            </span>
            <button>❌</button>
        </li>)}
      </ul>
    </div>
  );
};

export default PackingList;
