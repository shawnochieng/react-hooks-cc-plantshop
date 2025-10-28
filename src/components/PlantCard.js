import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleStock() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> 
      <button className={isSoldOut ? 'secondary' : 'primary'}  onClick={handleToggleStock}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}
 
export default PlantCard;