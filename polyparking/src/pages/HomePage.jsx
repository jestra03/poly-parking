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
                <div className="text-center mb-8">
                    <p className="text-lg font-medium mb-6">Parking Spots Available: 27</p>
                    <p className="text-lg font-medium mb-10">
                        Estimated Time to School:<br />
                        20 Minutes
                    </p>

                    <button
                        className="button-secondary mb-4 w-48"
                        onClick={() => navigate('/lots')}
                    >
                        Reserve A Spot
                    </button>

                    <div className="mt-4">
                        <button
                            className="button-secondary w-48"
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