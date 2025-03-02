import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const ReserveSpotPage = () => {
    const { lotId } = useParams();
    const navigate = useNavigate();
    const [selectedSpot, setSelectedSpot] = useState(null);

    // mock data
    const availableSpots = [
        { id: 1, status: 'available' },
        { id: 2, status: 'available' },
        { id: 3, status: 'taken' },
        { id: 4, status: 'taken' },
        { id: 5, status: 'taken' },
        { id: 6, status: 'taken' },
        { id: 7, status: 'available' },
        { id: 8, status: 'taken' },
        { id: 9, status: 'taken' },
        { id: 10, status: 'taken' },
        // add more spots as needed
    ];

    const handleSelectSpot = (spotId) => {
        setSelectedSpot(spotId);
    };

    const handleReserve = () => {
        if (selectedSpot) {
            const reservationInfo = {
                lotId,
                spotId: selectedSpot,
                time: new Date().toLocaleString()
            };
            localStorage.setItem('reservationInfo', JSON.stringify(reservationInfo));
            navigate(`/confirmation/${lotId}/${selectedSpot}`);
        }
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">Reserve a Spot</h2>
                <h3 className="text-lg mb-4">Lot {lotId.toUpperCase()}</h3>

                <div className="relative w-full max-w-xs mb-10">
                    {/* parking lot layout */}
                    <div className="border border-gray-400 p-2 bg-white">
                        <div className="flex flex-row justify-between">
                            <div className="w-1/2 pr-1">
                                {/* left row of parking spots */}
                                {availableSpots.slice(0, 5).map((spot) => (
                                    <div
                                        key={spot.id}
                                        className={`h-8 mb-1 flex items-center justify-center rounded-sm border border-gray-300 cursor-pointer ${
                                            spot.status === 'available'
                                                ? 'bg-green-200 hover:bg-green-300'
                                                : 'bg-gray-300'
                                        } ${selectedSpot === spot.id ? 'ring-2 ring-blue-500' : ''}`}
                                        onClick={() => spot.status === 'available' && handleSelectSpot(spot.id)}
                                    >
                                        {spot.id}
                                    </div>
                                ))}
                            </div>

                            <div className="w-1/2 pl-1">
                                {/* right row of parking spots */}
                                {availableSpots.slice(5, 10).map((spot) => (
                                    <div
                                        key={spot.id}
                                        className={`h-8 mb-1 flex items-center justify-center rounded-sm border border-gray-300 cursor-pointer ${
                                            spot.status === 'available'
                                                ? 'bg-green-200 hover:bg-green-300'
                                                : 'bg-gray-300'
                                        } ${selectedSpot === spot.id ? 'ring-2 ring-blue-500' : ''}`}
                                        onClick={() => spot.status === 'available' && handleSelectSpot(spot.id)}
                                    >
                                        {spot.id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="button-secondary w-32"
                    onClick={handleReserve}
                    disabled={!selectedSpot}
                >
                    Reserve
                </button>
            </div>
            <Navbar />
        </div>
    );
};

export default ReserveSpotPage;