import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="app-header italic text-green-800 dark:bg-gray-800 dark:text-white itim-font text-2xl">
            {title || "PolyParking"}
        </header>
    );
};

export default Header;
