import React from 'react';
import logo from "../assets/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link as LinkR} from "react-router-dom";
import img1 from "../assets/karta-multisport_classic.webp";
import logo_w from "../assets/logo_white.png";

const Footer = ({isDarkMode}) => {

    return (
        <footer>
            <div className="container">

                <div className="row">
                    <div className="col">
                        <LinkR className="logo" to="/"><img src={isDarkMode ? logo_w : logo} alt=""/></LinkR>
                        <p>Kolejowa 15A, 32-080 Zabierzów</p>
                        <div className="links">
                        <a
                           href="https://www.google.com/maps/dir/?api=1&amp;destination=Power+%26+Beauty&amp;destination_place_id=ChIJAWH9lGlYFkcRoFrvmdLGa1c"
                           target="_self" data-type="url">
                            <button className="link">Wskaż na Mapie Google <FontAwesomeIcon className="button_icon" icon={faLocationDot} /></button>
                        </a>
                        <LinkR to="/karty" className="cards_link"><img src={img1} alt=""/>Akceptujemy również karty</LinkR>
                        </div>
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
