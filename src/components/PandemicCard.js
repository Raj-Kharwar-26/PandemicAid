import React from 'react';

function PandemicCard({ pandemic, onOpen }) {
    return (
        <div
            className="pandemic-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            onClick={() => onOpen(pandemic)}
        >
            <img src={pandemic.image} alt={pandemic.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-gray-800 p-4">{pandemic.name}</h3>
        </div>
    );
}

export default PandemicCard;
