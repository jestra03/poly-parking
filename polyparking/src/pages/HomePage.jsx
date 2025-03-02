import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <Header />
            <div className="content-container justify-center">
                <div className="text-center mb-4">
                    <p className="text-lg font-medium mb-4">
                        Available Parking:<br />
                        27 Spots
                    </p>

                    <button
                        className="button-secondary mb-6  mt-4 w-48 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        onClick={() => navigate('/lots')}
                    >
                        Reserve A Spot
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
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default HomePage;