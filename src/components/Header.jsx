import './Header.css';

function Header() {
    return (
        <>
            <header className="header">
                <div className="navbar_logo">
                    <p>
                        R<span className="R">R</span>
                    </p>
                </div>
                <div className="header_text">
                    <h1>
                        BLOOM<span className="white-text">ING</span>
                    </h1>
                    <p>

                        Fresh flow<span className="white-text">ers, handpicked with</span> love – brin<span className="white-text">ging beauty, color, and</span> calm into <span className="white-text">your everyday life.</span>
                    </p>
                    <div className="color_block"></div>
                </div>
                <div className="header_content">
                    {/* <div className="img_poeny">
                        <img
                            src="src\assets\1748529422710zt4r3ky6.webp"
                            alt=""
                        />
                    </div> */}
                    <div className="logo">
                        <h1>
                            <span className='rose'>ROSE</span>
                            <br />
                            <span className='rue'>& Rue</span>
                        </h1>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
