import paradiseImage from "./assets/paradise.jpeg";
import meditationImage from "./assets/meditation.jpeg";
import multiPlePlantsImage from "./assets/multiPlantPack.jpeg";
import officePlantImage from "./assets/officePlants.jpeg";
import rainPlant from "./assets/rainForest.jpeg";

import { createSlice } from "@reduxjs/toolkit";

export const plantSlice = createSlice({
  name: "plants",
  initialState: [
    {
      name: "Monstera",
      img: paradiseImage,
      cost: 3500,
      quantity: 0,
    },
    {
      name: "Fiddle Leaf Fig",
      img: meditationImage,
      cost: 4500,
      quantity: 0,
    },
    {
      name: "Snake Plant",
      img: multiPlePlantsImage,
      cost: 3000,
      quantity: 0,
    },
    {
      name: "Peace Lily",
      img: officePlantImage,
      cost: 4000,
      quantity: 0,
    },
    {
      name: "Spider Plant",
      img: rainPlant,
      cost: 2500,
      quantity: 0,
    },
  ],
  reducers: {
    addPlant: (state, action) => {
      const plant = state.find((p) => p.name === action.payload.name);
      if (plant) {
        plant.quantity += action.payload.quantity;
      }
    },
    removePlant: (state, action) => {
      const plant = state.find((p) => p.name === action.payload.name);
      if (plant) {
        plant.quantity = Math.max(0, plant.quantity - action.payload.quantity);
      }
    }
  },
});

export const { addPlant, removePlant, incrementPlant, decrementPlant } =
  plantSlice.actions;

export default plantSlice.reducer;
