import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { MapPin, Navigation, Search, X } from 'lucide-react';

const DirectionsPage = () => {
    const [showDestinationInput, setShowDestinationInput] = useState(false);
    const [destination, setDestination] = useState('');
    const [eta, setEta] = useState('20 Minutes');
    const [traffic, setTraffic] = useState('Moderate');
    const [leaveBy, setLeaveBy] = useState('10:40 AM');

    const handleEditDirections = () => {
        setShowDestinationInput(true);
    };

    const handleCancelInput = () => {
        setShowDestinationInput(false);
        setDestination('');
    };

    const handleSubmitDestination = (e) => {
        e.preventDefault();
        setShowDestinationInput(false);

        if (destination.toLowerCase().includes('agriculture')) {
            setEta('20 Minutes');
            setTraffic('Moderate');
            setLeaveBy('10:40 AM');
        } else {
            setEta('25 Minutes');
            setTraffic('Busy');
            setLeaveBy('10:32 AM');
        }
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container p-0">
                <div className="w-full">
                    <div className="p-4">
                        <h2 className="text-xl font-medium mb-4">Maps</h2>

                        {showDestinationInput ? (
                            <form onSubmit={handleSubmitDestination} className="mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="Enter Building"
                                        className="input-field flex-1 dark:text-black"
                                    />
                                    <button
                                        type="submit"
                                        className="ml-2 bg-gray-800 text-white p-2 rounded-full"
                                    >
                                        <Search size={20} />
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md w-full"
                                    onClick={handleCancelInput}
                                >
                                    Cancel
                                </button>
                            </form>
                        ) : (
                            <button
                                className="button-primary w-full mb-4"
                                onClick={handleEditDirections}
                            >
                                Edit Directions
                            </button>
                        )}
                    </div>

                    {/* map component replace later to use react-leaflet or google maps */}
                    <div className="w-full h-64 bg-blue-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-500">Map would be displayed here</p>

                            {/* route visualization (simplified) */}
                            <div className="absolute inset-0">
                                <div className="w-1/2 h-1 bg-blue-500 absolute top-1/2 left-1/4 transform rotate-45"></div>
                                <div className="w-6 h-6 rounded-full bg-red-500 absolute bottom-1/4 left-1/4 flex items-center justify-center">
                                    <MapPin size={16} color="white" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-500 absolute top-1/4 right-1/4 flex items-center justify-center">
                                    <Navigation size={16} color="white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ETA information */}
                    <div className="p-4 bg-white">
                        <div className="mb-1">
                            <p className="font-medium">ETA: {eta}</p>
                            <p>Traffic: {traffic}</p>
                            <p>Leave by: {leaveBy}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default DirectionsPage;