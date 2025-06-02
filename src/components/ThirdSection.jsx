import './ThirdSection.css';
import flower1 from '../assets/peoniespink.jpg';
import flower2 from '../assets/pinkpeonies2.jpg';

const ThirdSection = () => {
    return (
        <div className="third-section-wrapper">
            <div className="third-section-flex-container">
                <div className="tips-text">
                    <h1>Tips for Keeping Your Flowers Fresh Longer</h1>
                    <p>
                        We know how much joy a beautiful bouquet can bring — it
                        brightens your space, lifts your mood, and marks a
                        meaningful moment.
                    </p>
                    <p>
                        Naturally, you want that beauty to last. With just a few
                        simple tips and a little care, your flowers can stay
                        fresh, vibrant, and full of life for even longer.
                    </p>
                    <button className="tips-btn">More tips</button>
                </div>

                {/* Existing container-scale and container with images and tips */}
                <div className="container-scale">
                    <div className="container">
                        <div>
                            <img
                                src={flower1}
                                alt="Orange-pink flower with grey background"
                                className="image1"
                            />
                        </div>

                        <div className="text-box bg1">
                            <p className="text-bg1">Trim stems at an angle.</p>
                        </div>

                        <div className="text-box bg2">
                            <p className="textbox2">
                                Changing the water every 2–3 days! Fresh water
                                keeps the blooms hydrated and makes them last
                                longer.
                            </p>
                        </div>

                        <div className="text-box pink-lower">
                            <p className="textbox3">
                                If you notice wilting flowers, remove them
                                promptly to prevent them from affecting the
                                health of the remaining blooms.
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
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
