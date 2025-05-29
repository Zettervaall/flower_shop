import React from 'react';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navigation.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="nav-links">
                        <a href="/flowers">FLOWERS</a>
                        <a href="/decoration">DECORATION</a>
                        <a href="/gift-ideas">GIFT IDEAS</a>
                        <a href="/tips">TIPS</a>
                        <a href="/contact">CONTACT</a>
                    </div>
                </div>
            </nav>

            <div className="nav-icons">
                <FaUser />
                <FaSearch />
                <FaShoppingCart />
            </div>

            <div className="break-line"></div>
        </>
    );
};

export default Navbar;
