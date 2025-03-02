import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const ReservationsPage = () => {
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

    const getTimeRemaining = () => {
        if (isReservationValid) {
            const reservationTime = new Date(reservationInfo.time);
            const currentTime = new Date();
            const timeDifference = currentTime - reservationTime;
            const eightHours = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
            const timeRemaining = eightHours - timeDifference;
            const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
            const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
            return `${hours} hours and ${minutes} minutes`;
        }
        return '';
    }

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">Reservations</h2>
                {isReservationValid ? (
                    <div className="w-full max-w-md mb-6">
                        <p className="text-lg font-medium">Lot ID: {reservationInfo.lotId.toUpperCase()}</p>
                        <p className="text-lg font-medium">Spot ID: {reservationInfo.spotId}</p>
                        <p className="whitespace-pre-line">Reservation Start: {reservationInfo.time}</p>
                        <p className="text-sm text-red-500">Valid for {getTimeRemaining()}</p>


                        <div className="space-y-4 mt-16">
                            <button
                                className="button-secondary w-full"
                                onClick={() => navigate(`/lots`)}
                            >
                                Change Reservation
                            </button>
                            <button
                                className="button-secondary w-full"
                                onClick={() => navigate('/directions')}
                            >
                                Directions
                            </button>
                            <button
                                className="button-secondary w-full bg-red-500"
                                onClick={() => {
                                    localStorage.removeItem('reservationInfo');
                                    navigate('/reservations');
                                }}
                            >
                                Cancel Reservation
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <p>No reservations found.</p>
                        <button
                            className="button-secondary mb-4 w-48"
                            onClick={() => navigate('/lots')}
                        >
                            Reserve A Spot
                        </button>
                    </>
                )}
            </div>
            <Navbar />
        </div>
    );
};

export default ReservationsPage;