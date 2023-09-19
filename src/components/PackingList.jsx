import React from "react";

const PackingList = ({ parkingItems, handleDelete, handleToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {parkingItems.map(items => 
        <li key={items.id}>
          <input type="checkbox" value={parkingItems.packed} onChange={()=>handleToggleItem(items.id)}/>
            <span style={items.packed ? {textDecoration: "line-through"}: {}}>
                {items.selectedItem} {items.description}
            </span>
            <button onClick={()=> handleDelete(items.id)}>❌</button>
        </li>)}
      </ul>
    </div>
  );
};

export default PackingList;
