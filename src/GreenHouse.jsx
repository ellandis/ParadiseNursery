import React from "react";
// import { plantSlice } from "./plantSlice";
import { useSelector, useDispatch } from "react-redux";
import "./GreenHouse.css";

const GreenHouse = () => {
  const plantsItems = useSelector((state) => state.plants);
  console.log(plantsItems);
  const dispatch = useDispatch();
  

  // const handleAddPlant = (plant) => {
  //   dispatch(plantSlice.actions.addPlant({ name: plant.name, quantity: 1 }));
  // };

  return (
    <>
      <nav className="navbar">
        <h2>Plant Nursery</h2>
        <span className="cart-icon">🛒</span>
      </nav>
      <div>
        {/* You can add additional UI elements here */}
      </div>
      <ul className="plant-list">
        {plantsItems.map((plant, idx) => (
          <li key={idx}>
            <img src={plant.img} alt={plant.name} />
            <p>{plant.name}</p>
            <p>Price: ${plant.cost}</p>
            {plant.quantity > 0 ? (
              <div className="quantity-controls">
                <button onClick={() => dispatch({ type: 'plants/removePlant', payload: plant.name })}>-</button>
                <span>{plant.quantity}</span>
                <button onClick={() => dispatch({ type: 'plants/addPlant', payload: plant.name })}>+</button>
              </div>
            ) : (
              <button onClick={() => dispatch({ type: 'plants/addPlant', payload: plant.name })}>
                Add to Cart
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GreenHouse;
