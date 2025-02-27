import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="app-header">
            {title || "PolyParking"}
        </header>
    );
};

export default Header;