import React from 'react';
import logo from "../assets/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img src={logo} alt=""/>
                <p className="adress_mobile">Kolejowa 15A, 32-080 Zabierzów</p>
                <div className="row">
                    <div className="logo_d col">
                        <img className="logo_d " src={logo} alt=""/>
                        <p>Kolejowa 15A, 32-080 Zabierzów</p>
                    </div>
                    <div className="col">
                        <p>Menu</p>
                        <p>Strona Główna</p>
                        <p>O nas</p>
                        <p>Trenerzy</p>
                        <p>Zajęcia</p>
                        <p>Kontakt</p>
                    </div>
                    <div className="col">
                        <p>Godziny Otwarcia</p>
                        <p>pon-pt</p>
                        <span>06:00 - 22:00</span>
                        <p>sobota</p>
                        <span>07:00 - 14:00</span>
                        <p>niedziela</p>
                        <span>nieczynne</span>
                    </div>
                    <div className="col">
                        <p>Kontakt</p>
                        <p><FontAwesomeIcon className="icon" icon={faPhone}/>+48 123 456 789</p>
                        <p><FontAwesomeIcon className="icon" icon={faEnvelope}/>powerandbeauty161@gmail.com</p>
                        <p><FontAwesomeIcon className="icon" icon={faFacebook}/>Facebook</p>
                        <p><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</p>
                    </div>

                </div>
                <div className="row">
                    <p className="copy">&#169; Power & Beauty 2024</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
