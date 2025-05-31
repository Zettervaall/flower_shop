import './AboutSection.css';

export default function AboutSection() {
    return (
        <div className="about-section-wrapper">
            <div className="logo-aboutsection">
                <h1>
                    <span className="rose-aboutsection">ROSE</span>
                    <br />
                    <span className="rue-aboutsection">& Rue</span>
                </h1>
            </div>
            <p className="about-description">
                At Rose & Rue, we believe that flowers speak the language of the
                heart. Nestled in the heart of the community, our boutique
                flower shop is dedicated to crafting stunning floral
                arrangements for every occasion — from joyful celebrations to
                tender moments of reflection. We source our blooms from local
                growers whenever possible, ensuring each bouquet is fresh,
                sustainable, and thoughtfully designed. Whether you're picking
                up a single rose or planning a grand event, Rose & Rue is here
                to help you say it beautifully.
            </p>
        </div>
    );
}
