import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"
// lot images
import lotAImage from '../assets/a.jpg';
import lotCImage from '../assets/c.jpg';
import lotGImage from '../assets/g.jpg';
import lotHImage from '../assets/h.jpg';
import lotKImage from '../assets/k.jpg';
import lotRImage from '../assets/r.jpg';


const ReservationsPage = () => {
    const navigate = useNavigate();
    const reservationInfo = JSON.parse(localStorage.getItem('reservationInfo'));
    const lotImages = {
        a: lotAImage,
        c: lotCImage,
        g: lotGImage,
        h: lotHImage,
        k: lotKImage,
        r: lotRImage,
    };
    const lotId = reservationInfo?.lotId || '';

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
                    <div className="w-full max-w-xs mb-6">
                        <p className="text-lg font-medium">Lot ID: {reservationInfo.lotId.toUpperCase()}</p>
                        <p className="text-lg font-medium">Spot ID: {reservationInfo.spotId}</p>
                        <p className="whitespace-pre-line">Reservation Start: {reservationInfo.time}</p>
                        <p className="text-sm text-red-500">Valid for {getTimeRemaining()}</p>
                        <div className="flex justify-center">
                            <img
                                src={lotImages[lotId] || 'https://via.placeholder.com/300?text=Parking+Lot'}
                                alt={`Parking Lot ${lotId.toUpperCase()}`}
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="space-y-4 mt-4">
                            <Button
                                className="button-secondary w-full"
                                onClick={() => navigate(`/lots`)}
                            >
                                Change Reservation
                            </Button>
                            <Button
                                className="button-secondary w-full"
                                onClick={() => navigate('/directions')}
                            >
                                Directions
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger className="w-full">
                                    <Button
                                        className="button-secondary w-full bg-red-500 hover:bg-red-600"
                                    >
                                    Cancel Reservation
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will cancel your reservation and cannot be undone.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>No, I don't want to Cancel</AlertDialogCancel>
                                    <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={() => {
                                    localStorage.removeItem('reservationInfo');
                                    navigate('/reservations');
                                }}>Cancel Reservation</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                                </AlertDialog>
                        </div>
                    </div>
                ) : (
                    <>
                        <p>No reservations found.</p>
                        <Button
                            className="button-secondary mb-4 w-48"
                            onClick={() => navigate('/lots')}
                        >
                            Reserve A Spot
                        </Button>
                    </>
                )}
            </div>
            <Navbar />
        </div>
    );
};

export default ReservationsPage;