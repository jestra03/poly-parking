import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="app-header dark:bg-gray-800 dark:text-white">
            {title || "PolyParking"}
        </header>
    );
};

export default Header;