import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import { MapPin, Navigation, Search } from 'lucide-react';

const DirectionsPage = () => {
    const [showDestinationInput, setShowDestinationInput] = useState(false);
    const [destination, setDestination] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [eta, setEta] = useState('20 Minutes');
    const [traffic, setTraffic] = useState('Moderate');
    const [leaveBy, setLeaveBy] = useState('10:40 AM');

    // default to Cal Poly campus coordinates
    const [mapLocation, setMapLocation] = useState('Cal Poly San Luis Obispo');

    // Google Maps Embed Integration
    const getGoogleMapsUrl = () => {
        // Base URL with Cal Poly as origin
        let baseUrl = 'https://www.google.com/maps/embed/v1/directions';

        const keyParts = ["AIzaSyCqH", "OXraXrKFCED", "o0XUXgTs5E4R2lQAWcE"];
        const apiKey = process.env.REACT_APP_MAPS_API_KEY || keyParts.join("");

        // Default origin is Cal Poly
        let origin = 'Cal+Poly+San+Luis+Obispo';

        // If we have a search query, use it as destination
        let dest = mapLocation ? encodeURIComponent(mapLocation) : 'Cal+Poly+San+Luis+Obispo';

        // Construct the URL
        return `${baseUrl}?key=${apiKey}&origin=${origin}&destination=${dest}&mode=driving&zoom=17`;
    };

    const handleEditDirections = () => {
        setShowDestinationInput(true);
    };

    const handleCancelInput = () => {
        setShowDestinationInput(false);
        setSearchQuery('');
    };

    const handleSubmitDestination = (e) => {
        e.preventDefault();
        setShowDestinationInput(false);

        // Update map location based on search
        if (searchQuery) {
            // Append "Cal Poly" to the search to keep it campus-related
            setMapLocation(`Cal Poly ${searchQuery}`);
            setDestination(searchQuery);

            // Set ETA based on destination
            if (searchQuery.toLowerCase().includes('agriculture')) {
                setEta('20 Minutes');
                setTraffic('Moderate');
                setLeaveBy('10:40 AM');
            } else {
                setEta('25 Minutes');
                setTraffic('Busy');
                setLeaveBy('10:32 AM');
            }
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

                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search Cal Poly Buildings"
                                        className="input-field flex-1"

                                    />
                                    <button
                                        type="submit"
                                        className="button-secondary ml-2 text-white p-2 rounded-full"
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
                                {destination ? `Current: ${destination}` : 'Edit Directions'}
                            </button>
                        )}
                    </div>

                    {/* Google Maps embed */}
                    <div className="w-full h-64 relative">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src={getGoogleMapsUrl()}
                            allowFullScreen
                            title="Google Maps"
                        ></iframe>

                        {/* Fallback for demo or when API key is not available */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-blue-100 bg-opacity-0">
                            <p className="text-gray-500 bg-white bg-opacity-75 p-2 rounded">
                                {mapLocation && !mapLocation.includes('Cal Poly')
                                    ? 'Searching: Cal Poly ' + mapLocation
                                    : 'Map focused on: ' + mapLocation}
                            </p>

                            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                                <div className="bg-white rounded p-1">
                                    <MapPin size={16} color="red" />
                                </div>
                                <div className="bg-white rounded p-1">
                                    <Navigation size={16} color="blue" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ETA information */}
                    <div className="p-4 bg-white dark:bg-gray-900">
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