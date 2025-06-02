// src/components/SecondSection.jsx
import './SecondSection.css';
import { Link } from 'react-router-dom';

const cat = [
    { name: 'Bouquets', path: '/flowers', img: '/assets/bukett1.jpg' },
    { name: 'Indoor', path: '/flowers', img: '/assets/bukett2.jpg' },
    { name: 'Gifts', path: '/flowers', img: '/assets/bukett3.jpg' },
    { name: 'Decoration', path: '/flowers', img: '/assets/bukett4.jpg' },
    { name: 'Outdoor', path: '/flowers', img: '/assets/bukett5.jpg' }
];

const SecondSection = () => {
    return (
        <div className="categories-container">
            {cat.map((cat) => (
                <Link key={cat.name} to={cat.path} className="category-link">
                    <div className="category-circle">
                        <img src={cat.img} alt={cat.name} />
                    </div>
                    <div className="category-label">{cat.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default SecondSection;
