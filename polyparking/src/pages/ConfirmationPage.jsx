import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

// lot images
import lotAImage from '../assets/a.jpg';
import lotBImage from '../assets/c.jpg';
import lotCImage from '../assets/g.jpg';
import lotDImage from '../assets/h.jpg';
import lotEImage from '../assets/k.jpg';
import lotFImage from '../assets/r.jpg';

const ConfirmationPage = () => {
    const { lotId, spotId } = useParams();
    const navigate = useNavigate();
    const [showMap, setShowMap] = useState(false);

    const lotImages = {
        a: lotAImage,
        c: lotBImage,
        g: lotCImage,
        h: lotDImage,
        k: lotEImage,
        r: lotFImage,
    };

    // Mapping lot IDs to actual locations on Cal Poly campus
    const lotLocations = {
        a: "Cal Poly Grand Avenue Parking",
        b: "Cal Poly Highland Drive Parking",
        c: "Cal Poly H-12 Parking",
        d: "Cal Poly H-16 Parking",
        e: "Cal Poly Farm Shop Parking",
        f: "Cal Poly Kennedy Library Parking"
    };

    // format current date for display
    const formatDate = () => {
        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(2);
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString();

        return ${month}/${day}/${year}\n${formattedHours}:${minutes} ${ampm};
    };

    // Google Maps URL with API integration
    const getGoogleMapsUrl = () => {
        // Base URL with Cal Poly as destination
        let baseUrl = 'https://www.google.com/maps/embed/v1/place';

        const keyParts = ["AIzaSyCqH", "OXraXrKFCED", "o0XUXgTs5E4R2lQAWcE"];
        const apiKey = process.env.REACT_APP_MAPS_API_KEY || keyParts.join("");

        // Get the specific lot location
        let location = encodeURIComponent(lotLocations[lotId] || 'Cal Poly San Luis Obispo');

        // Construct the URL
        return ${baseUrl}?key=${apiKey}&q=${location}&zoom=16;
    };

    const handleGetDirections = () => {
        // Store the selected lot in localStorage for the directions page
        localStorage.setItem('selectedLot', lotLocations[lotId]);
        navigate('/directions');
    };

    const handleChangeReservation = () => {
        navigate(/reserve/${lotId});
    };

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">Confirmed</h2>

                <div className="w-full max-w-md mb-6">

                    <div className="mb-4 relative">
                        {showMap ? (
                            <div className="w-full h-48 relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={getGoogleMapsUrl()}
                                    allowFullScreen
                                    title="Google Maps"
                                ></iframe>
                                <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md">
                                    <MapPin size={20} color="red" />
                                </div>
                            </div>
                        ) : (
                            <img
                                src={lotImages[lotId] || 'https://via.placeholder.com/300?text=Parking+Lot'}
                                alt={Parking Lot ${lotId.toUpperCase()}}
                                className="w-full h-48 object-cover"
                            />
                        )}

                        <button
                            onClick={toggleMap}
                            className="button-secondary absolute bottom-2 left-2 p-2 rounded-md shadow-md text-sm font-medium"
                        >
                            {showMap ? 'Show Image' : 'Show Map'}
                        </button>

                    </div>

                    <div className="text-center mb-8">
                        <p className="text-lg font-medium">
                            Lot {lotId.toUpperCase()}
                            <br />
                            Spot {spotId}
                        </p>
                        <p className="whitespace-pre-line mt-2">
                            {formatDate()}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            {lotLocations[lotId]}
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <button
                            className="button-secondary w-48 flex items-center justify-center"
                            onClick={handleGetDirections}
                        >
                            <Navigation size={16} className="mr-2" />
                            Directions
                        </button>

                        <button
                            className="button-secondary w-48"
                            onClick={handleChangeReservation}
                        >
                            Change Reservation
                        </button>
                        <button
                            className="button-secondary w-48"
                            onClick={() => {navigate('/lots')}}
                        >
                            Back to Lots
                        </button>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default ConfirmationPage;