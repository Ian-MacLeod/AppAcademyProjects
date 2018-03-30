import React from "react";

export default ({ items, itemId }) => {
  if (items === undefined) return <div />;
  const item = items[itemId];
  return (
    <div className="item-detail">
      <h3>{item.name}</h3>
      <p>Happiness: {item.happiness}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};
