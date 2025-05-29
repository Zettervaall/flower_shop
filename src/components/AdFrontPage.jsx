import './AdFrontPage.css';
import pinkBouquet from '../assets/pinkBouquet.jpg';

export default function AdFrontPage() {
    return (
        <div className="ad-frontpage">
            <div className="card-container">
                <div className="circle">
                    <div className="text-overlay">
                        DON’T FORGET MOTHERS DAY!
                    </div>
                    <div
                        className="circle-image"
                        style={{ backgroundImage: `url(${pinkBouquet})` }}
                    />
                </div>
                <button className="cta-button">DISCOVER BOUQUETS</button>
            </div>
        </div>
    );
}
