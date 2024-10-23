import React, { useState } from 'react';

function PandemicCard({ pandemic }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="pandemic-card" onClick={handleClick}>
            <img src={pandemic.image} alt={pandemic.name} />
            <h3 className="text-xl font-bold text-gray-800 p-4">{pandemic.name}</h3>
            {expanded && <p className="text-gray-600 p-4">{pandemic.details}</p>}
        </div>
    );
}

export default PandemicCard;
