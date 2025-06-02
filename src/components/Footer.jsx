import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>Info</h4>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Socials</h4>
                    <ul>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">YouTube</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Admin</h4>
                    <ul>
                        <li>
                            <a href="/admin">Admin Panel</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
