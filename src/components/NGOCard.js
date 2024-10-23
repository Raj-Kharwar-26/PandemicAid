import React, { useState } from 'react';

function NGOCard({ ngo }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="ngo-card" onClick={() => setExpanded(!expanded)}>
            <img src="https://miro.medium.com/v2/resize:fit:1170/1*_DyTE4CxTFuRHks7NAV8cA.png" alt={ngo.name} />
            <h3 className="text-xl font-bold text-gray-800 p-4">{ngo.name}</h3>
            {expanded && <p className="text-gray-600 p-4">{ngo.about}</p>}
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded m-4 hover:bg-blue-700">
                Donate
            </button>
        </div>
    );
}

export default NGOCard;
