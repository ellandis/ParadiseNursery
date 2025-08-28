import React from 'react';

import './GreenHouse.css';

function GreenHouse() {
    
    const plants = [
            {
                name: "Monstera",
                image: paradiseImage,
                idx: 0
            },
            {
                name: "Fiddle Leaf Fig",
                image: meditationImage,
                idx: 1      
            },
            {
                name: "Snake Plant",
                image: multiPlePlantsImage,
                idx: 2
            },
            {
                name: "Peace Lily",
                image: officePlantImage,
                idx: 3
            },
            {
                name: "Spider Plant",
                image: rainPlant,
                idx: 4
            }
        ];

    return (
        // <div>
        //     <h1>Welcome to Paradise Nursery GreenHouse</h1>
        //     {/* Add your greenhouse content here */}
        // </div>
        <div className='greenhouse-container' >
            {plants.map((plant, idx) => (
                <div key={plant.name} className='greenhouse-item'>
                    <img className='greenhouse-image'
                        src={plant.image}
                        alt={plant.name}
                        
                    />
                    <h3>{plant.name}</h3>

                    <div className='greenhouse-controls' >
                        <button
                            onClick={() => {
                                const updated = [...plants];
                                updated[idx].count = Math.max((updated[idx].count || 0) - 1, 0);
                                GreenHouse.forceUpdate?.();
                            }}
                            disabled={plant.count === 0}
                        >-</button>
                        <span>{plant.count || 0}</span>
                        <button
                            onClick={() => {
                                const updated = [...plants];
                                updated[idx].count = (updated[idx].count || 0) + 1;
                                GreenHouse.forceUpdate?.();
                            }}
                        >+</button>
                    </div>
                </div>
            ))}
        </div>
        
    );
}

export default GreenHouse;