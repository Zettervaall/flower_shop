import './ThirdSection.css';
import flower1 from '../assets/smallOneFlower.jpeg';
import flower2 from '../assets/twoFlowers.jpeg';

const ThirdSection = () => {
    return (
        <div className="container">
            <div>
                <img
                    src={flower1}
                    alt="Orange-pink flower with grey background"
                    className="image1"
                />
            </div>

            <div className="text-box bg1">
                <p className="text-bg1">Flowers are love’s truest language.</p>
            </div>

            <div className="text-box bg2">
                <p className="textbox2">
                    Flowers are the poetry of the earth, writing messages of
                    hope and love with every petal.
                </p>
            </div>

            <div className="text-box pink-lower">
                <p className="textbox3">
                    Giving flowers is like offering a piece of your heart, a
                    silent message of care and kindness. In their bloom, we
                    share beauty that words often fail to express.
                </p>
            </div>

            <div>
                <img
                    src={flower2}
                    alt="Big coral colored flower with grey background"
                    className="image2"
                />
            </div>
        </div>
    );
};

export default ThirdSection;
