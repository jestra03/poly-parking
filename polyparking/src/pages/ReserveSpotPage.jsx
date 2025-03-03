import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import lotAImage from '../assets/a.jpg';
import lotBImage from '../assets/c.jpg';
import lotCImage from '../assets/g.jpg';
import lotDImage from '../assets/h.jpg';
import lotEImage from '../assets/k.jpg';
import lotFImage from '../assets/r.jpg';

const ReserveSpotPage = () => {
    const { lotId } = useParams();
    const navigate = useNavigate();
    const [selectedSpot, setSelectedSpot] = useState(null);

    const parkingLots = [
        { id: 'a', name: 'Lot A', available: 3, total: 45, image: lotAImage },
        { id: 'c', name: 'Lot C', available: 7, total: 100, image: lotBImage },
        { id: 'g', name: 'Lot G', available: 3, total: 50, image: lotCImage },
        { id: 'h', name: 'Lot H', available: 3, total: 88, image: lotDImage },
        { id: 'k', name: 'Lot K', available: 5, total: 300, image: lotEImage },
        { id: 'r', name: 'Lot R', available: 6, total: 99, image: lotFImage },
    ];
    const lot = parkingLots.find(lot => lot.id === lotId);


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

    const lotLocations = {
        a: "Cal Poly A-1 Parking",
        c: "Cal Poly California Boulevard",
        g: "Cal Poly G-2 Grand Avenue Structure",
        h: "Cal Poly H-1 Parking",
        k: "Cal Poly Truckee Road",
        r: "Cal Poly Klamath Rd"
    };

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

            // store the location in localStorage for DirectionsPage
            localStorage.setItem('selectedLot', lotLocations[lotId]);

            navigate(`/confirmation/${lotId}/${selectedSpot}`);
        }
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">Reserve a Spot</h2>
                <h3 className="text-lg mb-4">Lot {lotId.toUpperCase()}</h3>
                <div className="w-full max-w-xs mb-2 overflow-hidden">
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

                <div className="relative w-full max-w-xs mb-10">
                    {/* parking lot layout */}
                    <div className="border border-gray-400 p-2 bg-white dark:bg-gray-800 dark:border-gray-800">
                        <div className="flex flex-row justify-between">
                            <div className="w-1/2 pr-1">
                                {/* left row of parking spots */}
                                {availableSpots.slice(0, 5).map((spot) => (
                                    <div
                                        key={spot.id}
                                        className={`h-8 mb-1 flex items-center justify-center rounded-sm border border-gray-300 cursor-pointer dark:text-black ${
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
                                        className={`h-8 mb-1 flex items-center justify-center rounded-sm border border-gray-300 cursor-pointer dark:text-black ${
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

                <Button
                    className={`button-secondary w-full max-w-xs mb-4 ${!selectedSpot ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleReserve}
                    disabled={!selectedSpot}
                >
                    Reserve
                </Button>
                <Button
                    className="button-secondary w-full max-w-xs"
                    onClick={() => {setSelectedSpot(null); navigate('/lots')}}
                >
                    Back to Lots
                </Button>
            </div>
            <Navbar />
        </div>
    );
};

export default ReserveSpotPage;