import React from 'react';
import NGOCard from '../components/NGOCard';

function NGOList() {
    const ngos = [
        { id: 1, name: 'NGO 1', about: 'About NGO 1', image: 'https://miro.medium.com/v2/resize:fit:1170/1*_DyTE4CxTFuRHks7NAV8cA.png' },
        { id: 2, name: 'NGO 2', about: 'About NGO 2', image: 'https://source.unsplash.com/random/300x200?volunteer' },
        { id: 3, name: 'NGO 3', about: 'About NGO 3', image: 'https://source.unsplash.com/random/300x200?help' },
        // Add more NGOs with different images
    ];

    return (
        <div className="ngo-list max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Our Partner NGOs
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Learn more about the NGOs we partner with and support their efforts.
                </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {ngos.map(ngo => (
                    <NGOCard key={ngo.id} ngo={ngo} />
                ))}
            </div>
        </div>
    );
}

export default NGOList;
