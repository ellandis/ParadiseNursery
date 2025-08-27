import React from 'react';

function GreenHouse() {
    
    const plants = [
            {
                name: "Monstera",
                image: "https://www.thesill.com/cdn/shop/products/monstera-deliciosa-plant.jpg"
            },
            {
                name: "Fiddle Leaf Fig",
                image: "https://www.thesill.com/cdn/shop/products/fiddle-leaf-fig-plant.jpg"
            },
            {
                name: "Snake Plant",
                image: "https://www.thesill.com/cdn/shop/products/snake-plant-laurentii.jpg"
            },
            {
                name: "Peace Lily",
                image: "https://www.thesill.com/cdn/shop/products/peace-lily-plant.jpg"
            },
            {
                name: "Spider Plant",
                image: "https://www.thesill.com/cdn/shop/products/spider-plant.jpg"
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