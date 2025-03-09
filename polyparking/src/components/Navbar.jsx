import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, CalendarCheck, Settings } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="nav-bar dark:bg-gray-800">
<<<<<<< HEAD
            <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-white'}`}>
=======
            <Link to="/home" className={`flex flex-col items-center ${isActive('/') ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-white'}`}>
>>>>>>> 5c6708442d46f714ff80627ebf455310219e5be6
                <Home size={24} />
                <span className="text-xs mt-1">Home</span>
            </Link>

            <Link to="/directions" className={`flex flex-col items-center ${isActive('/directions') ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-white'}`}>
                <MapPin size={24} />
                <span className="text-xs mt-1">GPS</span>
            </Link>

            <Link to="/reservations" className={`flex flex-col items-center ${isActive('/reservations') ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-white'}`}>
                <CalendarCheck size={24} />
                <span className="text-xs mt-1">Reservations</span>
            </Link>

            <Link to="/settings" className={`flex flex-col items-center ${isActive('/settings') ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-white'}`}>
                <Settings size={24} />
                <span className="text-xs mt-1">Settings</span>
            </Link>
        </nav>
    );
};

export default Navbar;