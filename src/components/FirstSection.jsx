import pinkBouquet from '../assets/pinkBouquet.jpg';
import flowerImage from '../assets/pinkFlower.png';

import './FirstSection.css';

export default function FirstSection() {
    return (
        <div className="combined-container">
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
            <div className="right-side">
                <div className="overlay-text">
                    <p>
                        Flowers don’t tell, they show. They’re a quiet language
                        of the earth, whispering stories of renewal, hope, and
                        the enduring power of life’s gentle beauty.
                    </p>
                </div>
                <img
                    src={flowerImage}
                    alt="Big pink flower"
                    className="flower-image"
                />
            </div>
        </div>
    );
}
