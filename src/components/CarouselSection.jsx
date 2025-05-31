import { useState } from 'react';
import './CarouselSection.css';

import imgSummer from '../assets/23-summer-23.jpg';
import imgBouquet from '../assets/Beauty of flowers2-min.jpg';

const images = [imgSummer, imgBouquet];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel">
            <button className="carousel-button left" onClick={prevSlide}>
                ‹
            </button>

            <img
                src={images[currentIndex]}
                alt={`Flower ${currentIndex + 1}`}
                className="carousel-image"
            />

            <button className="carousel-button right" onClick={nextSlide}>
                ›
            </button>
        </div>
    );
}
