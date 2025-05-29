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
                    className="image"
                />
            </div>

            <div className="text-box bg1">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>

            <div className="text-box bg2 top-right-rounded">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>

            <div className="text-box pink bottom-left-rounded">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>

            <div>
                <img
                    src={flower2}
                    alt="Big coral colored flower with grey background"
                    className="image"
                />
            </div>
        </div>
    );
};

export default ThirdSection;
