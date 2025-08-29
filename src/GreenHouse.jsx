import React from "react";
import { plantSlice } from "./plantSlice";
import { useSelector, useDispatch } from "react-redux";

function GreenHouse() {
  const plantsItems = useSelector((state) => state.plants);
  const dispatch = useDispatch();
  

  const handleAddPlant = (plant) => {
    dispatch(plantSlice.actions.addPlant({ name: plant.name, quantity: 1 }));
  };

  return (
    <>
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "#e0ffe0" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Paradise Nursery</div>
        <div>
            <span style={{ position: "relative", display: "inline-block" }}>
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ verticalAlign: "middle" }}
                >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
                </svg>
            </span>
        </div>
    </nav>
    <div>
        <h1>Welcome to Paradise Nursery GreenHouse</h1>
        {/* Add your greenhouse content here */}
    </div>
    <div className="greenhouse-container">
      {plantsItems.map((plant, idx) => (
        <div key={plant.name} className="greenhouse-item">
          <img
            className="greenhouse-image"
            src={plant.image}
            alt={plant.name}
          />
          <h3>{plant.name}</h3>

          <div className="greenhouse-controls">
            <button
              onClick={() => {
                const updated = [...plantsItems];
                updated[idx].count = Math.max((updated[idx].count || 0) - 1, 0);
                GreenHouse.forceUpdate?.();
              }}
              disabled={plant.count === 0}>
              -
            </button>
            <span>{plant.count || 0}</span>
            <button
              onClick={() => {
                const updated = [...plantsItems];
                updated[idx].count = (updated[idx].count || 0) + 1;
                GreenHouse.forceUpdate?.();
              }}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default GreenHouse;
