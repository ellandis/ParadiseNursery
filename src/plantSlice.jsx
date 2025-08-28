import paradiseImage from './assets/paradise.jpeg';
import meditationImage from './assets/meditation.jpeg';
import multiPlePlantsImage from './assets/multiPlantPack.jpeg';
import officePlantImage from './assets/officePlants.jpeg';
import rainPlant from './assets/rainForest.jpeg'

import { createSlice } from '@reduxjs/toolkit';

export const plantSlice = createSlice({
    name:'plants',
    initialState:[
        {
                name: "Monstera",
                image: paradiseImage,
                cost: 3500,
                quantity: 0
            },
            {
                name: "Fiddle Leaf Fig",
                image: meditationImage,
                cost: 4500,
                quantity: 0
            },
            {
                name: "Snake Plant",
                image: multiPlePlantsImage,
                cost: 3000,
                quantity: 0
            },
            {
                name: "Peace Lily",
                image: officePlantImage,
                cost: 4000,
                quantity: 0
            },
            {
                name: "Spider Plant",
                image: rainPlant,
                cost: 2500,
                quantity: 0
            }
    ],
    reducers: {
        addPlant: (state, action) => {
            const plant = state.find(p => p.name === action.payload.name);
            if (plant) {
                plant.quantity += action.payload.quantity;
            }
        },
        removePlant: (state, action) => {
            const plant = state.find(p => p.name === action.payload.name);
            if (plant) {
                plant.quantity = Math.max(0, plant.quantity - action.payload.quantity);
            }
        },
        incrementPlant: (state, action) => {
            const plant = state.find(p => p.name === action.payload.name);
            if (plant) {
                plant.quantity += 1;
            }
        },

        decrementPlant: (state, action) => {
            const plant = state.find(p => p.name === action.payload.name);
            if (plant) {
                plant.quantity = Math.max(0, plant.quantity - 1);
            }
        }
    }

});

export const { addPlant, removePlant, incrementPlant, decrementPlant } = plantSlice.actions;

export default plantSlice.reducer;
