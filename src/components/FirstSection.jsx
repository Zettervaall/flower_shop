import React from 'react';
import './FirstSection.css';

const BouquetSection = () => {
    return (
        <div className="bouquet-container">
            {/* Left: Images */}
            <div className="bouquet-images">
                <img
                    src="src/assets/firstImage.jpg"
                    alt="Bouquet 1"
                    className="bouquet-img"
                />
                <img
                    src="src/assets/SecondImage.jpg"
                    alt="Bouquet 2"
                    className="bouquet-img"
                />
            </div>

            {/* Right: Text Content */}
            <div className="bouquet-text">
                <h2 className="bouquet-heading">Bouquetes</h2>
                <div className="bouquet-description">
                    <p>
                        Shop Our Bouquets! Discover fresh, handpicked floral
                        arrangements perfect for every occasion. Brighten your
                        day or surprise someone special!
                    </p>
                    <button className="bouquet-button">
                        Discover our bouquets now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BouquetSection;
