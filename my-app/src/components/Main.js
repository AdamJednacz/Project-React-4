import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram} from '@fortawesome/free-brands-svg-icons'
import img1 from "../assets/men.png"

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="main_text">
                    <h1>BĄDŹ SILNIEJSZY</h1>
                    <h2>NIŻ TWOJE WYMÓWKI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. </p>

                    <div className="icons">
                        <button>Zapisz się</button>
                        <FontAwesomeIcon className="icon" icon={faFacebook}/>
                        <FontAwesomeIcon className="icon" icon={faInstagram}/>
                    </div>
                </div>
                <img src={img1} alt=""/>
            </div>
        </main>
    );
};

export default Main;
