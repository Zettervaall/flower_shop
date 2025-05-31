import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="nav-links">
                        <Link to="/flowers">FLOWERS</Link>
                        <Link to="/decoration">DECORATION</Link>
                        <Link to="/gift-ideas">GIFT IDEAS</Link>
                        <Link to="/tips">TIPS</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                    <div className="nav-icons">
                        <FaUser />
                        <FaSearch />
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
