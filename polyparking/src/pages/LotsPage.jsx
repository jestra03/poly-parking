import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import lotAImage from '../assets/lot-a.jpg';
import lotBImage from '../assets/lot-b.jpg';
import lotCImage from '../assets/lot-c.jpg';
import lotDImage from '../assets/lot-d.jpg';
import lotEImage from '../assets/lot-e.jpg';
import lotFImage from '../assets/lot-f.jpg';

const LotsPage = () => {
    const navigate = useNavigate();

    const parkingLots = [
        { id: 'a', name: 'Lot A', available: 3, total: 45, image: lotAImage },
        { id: 'b', name: 'Lot B', available: 7, total: 100, image: lotBImage },
        { id: 'c', name: 'Lot C', available: 3, total: 50, image: lotCImage },
        { id: 'd', name: 'Lot D', available: 3, total: 88, image: lotDImage },
        { id: 'e', name: 'Lot E', available: 5, total: 300, image: lotEImage },
        { id: 'f', name: 'Lot F', available: 6, total: 99, image: lotFImage },
    ];

    const handleSelectLot = (lotId) => {
        navigate(`/reserve/${lotId}`);
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">All Lots</h2>

                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    {parkingLots.map((lot) => (
                        <div
                            key={lot.id}
                            className="flex flex-col items-center"
                            onClick={() => handleSelectLot(lot.id)}
                        >
                            <div className="w-full h-32 mb-2 overflow-hidden">
                                <img
                                    src={lot.image}
                                    alt={`Parking ${lot.name}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/150?text=Parking+Lot';
                                    }}
                                />
                            </div>
                            <p className="font-medium">{lot.name}</p>
                            <p className="text-sm">Open: {lot.available}/{lot.total}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default LotsPage;