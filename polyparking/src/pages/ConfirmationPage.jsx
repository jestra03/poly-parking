import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

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

    const lotImages = {
        a: lotAImage,
        c: lotBImage,
        g: lotCImage,
        h: lotDImage,
        k: lotEImage,
        r: lotFImage,
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

        return `${month}/${day}/${year}\n${formattedHours}:${minutes} ${ampm}`;
    };

    const handleGetDirections = () => {
        navigate('/directions');
    };

    const handleChangeReservation = () => {
        navigate(`/reserve/${lotId}`);
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">Confirmed</h2>

                <div className="w-full max-w-md mb-6">
                    <div className="mb-4 flex justify-center">
                        <img
                            src={lotImages[lotId] || 'https://via.placeholder.com/300?text=Parking+Lot'}
                            alt={`Parking Lot ${lotId.toUpperCase()}`}
                            className="max-h-64 object-cover"
                        />
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
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <button
                            className="button-secondary w-48"
                            onClick={handleGetDirections}
                        >
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