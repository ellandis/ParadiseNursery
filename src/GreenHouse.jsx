import React from 'react';
import paradiseImage from './assets/paradise.jpeg';
import meditationImage from './assets/meditation.jpeg';
// Import additional plant images as needed
import multiPlePlantsImage from './assets/multiPlantPack.jpeg';
import officePlantImage from './assets/officePlants.jpeg';
import rainPlant from './assets/rainForest.jpeg'

function GreenHouse() {
    
    const plants = [
            {
                name: "Monstera",
                image: paradiseImage
            },
            {
                name: "Fiddle Leaf Fig",
                image: meditationImage
            },
            {
                name: "Snake Plant",
                image: multiPlePlantsImage
            },
            {
                name: "Peace Lily",
                image: officePlantImage
            },
            {
                name: "Spider Plant",
                image: rainPlant
            }
        ];

    return (
        // <div>
        //     <h1>Welcome to Paradise Nursery GreenHouse</h1>
        //     {/* Add your greenhouse content here */}
        // </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
            {plants.map((plant, idx) => (
                <div
                    key={plant.name}
                    style={{
                        flex: '1 0 30%',
                        boxSizing: 'border-box',
                        maxWidth: '30%',
                        minWidth: '220px',
                        background: '#f4f4f4',
                        borderRadius: '8px',
                        padding: '12px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={plant.image}
                        alt={plant.name}
                        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
                    />
                    <h3>{plant.name}</h3>
                </div>
            ))}
        </div>
        
    );
}

export default GreenHouse;