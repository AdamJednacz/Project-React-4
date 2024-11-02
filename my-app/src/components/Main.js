import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram} from '@fortawesome/free-brands-svg-icons'
import img1 from "../assets/men.png"

import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="main_text">
                    <h1>BĄDŹ SILNIEJSZY</h1>
                    <h2>NIŻ TWOJE WYMÓWKI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. </p>
                    <div className="buttons">
                        <Link to="kontakt" smooth={true} duration={500}><button className="sign_in"><FontAwesomeIcon className="icon" icon={faRightToBracket} />Zapisz się</button></Link>
                        <a href="https://www.facebook.com/profile.php?id=61565021120925"><button className="fb"><FontAwesomeIcon className="icon" icon={faFacebook}/>Facebook</button></a>
                        <a href="https://www.instagram.com/powerandbeauty2024/"><button className="ig"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</button></a>
                    </div>
                </div>
                <img src={img1} alt=""/>
            </div>
        </main>
    );
};

export default Main;
