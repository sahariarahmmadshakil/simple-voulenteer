import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/home'>Main</Link>
                <Link to='/volenters'>Volenters</Link>
            </nav>
        </div>
    );
};

export default Header;