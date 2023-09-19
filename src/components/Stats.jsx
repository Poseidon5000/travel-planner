import React from "react";

const Stats = ({ parkingItems }) => {
  if(!parkingItems.length)
    return(
      <p className="stats">
        <em>
          Start adding items to your packing list 🚀
        </em>
      </p>
      );


  const newItems = parkingItems.length;
  const packedItems = parkingItems.filter((items) => items.packed).length;
  const percentagePacked = Math.round((packedItems / newItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You have everything packed and you're ready to go ✈️"
          : `💼 you have ${newItems} items in your list, and you've already packed ${packedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
};

export default Stats;
