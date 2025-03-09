import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const navigate = useNavigate();
    const reservationInfo = JSON.parse(localStorage.getItem('reservationInfo'));

    let isReservationValid = false;
    if (reservationInfo && reservationInfo.time) {
        const reservationTime = new Date(reservationInfo.time);
        const currentTime = new Date();
        const timeDifference = currentTime - reservationTime;
        const eightHours = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
        isReservationValid = timeDifference < eightHours;
    }

    const handleReserveASpot = () => {
        if (!isReservationValid) {
            console.log(isReservationValid, reservationInfo);
            navigate('/lots');
        } else {
            navigate('/reservations');
        }
    }

    return (
        <div className="page-container">
            <Header />
            <div className="content-container justify-center">
                <div className="text-center mb-4">
                    <p className="text-lg font-medium mb-4">
                        Available Parking:<br />
                        27 Spots
                    </p>
                    {isReservationValid === false 
                    ? <div>
                        <button
                        className="button-secondary mb-6  mt-4 w-48 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        onClick={() => handleReserveASpot()}
                    >
                        Reserve A Spot
                    </button>
                    </div>
                    : <div>
                        <button
                        className="button-secondary mb-6  mt-4 w-48 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        onClick={() => handleReserveASpot()}
                    >
                        Check Reservation
                    </button>

                    <p className="text-lg font-medium mb-6 mt-10">
                        Estimated Time to School:<br />
                        20 Minutes
                    </p>
                    <div className="mt-2">
                        <button
                            className="button-secondary mt-4 w-48 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                            onClick={() => navigate('/directions')}
                        >
                            Directions
                        </button>
                    </div>
                    </div>}
                   

                    
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default HomePage;