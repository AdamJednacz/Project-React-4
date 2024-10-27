import React, {useState} from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-scroll';
import { Link as LinkR } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="container">
            <img src={logo} alt=""/>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleOpenMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Strona Główna</Link>
                    <Link to="/about_us" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">O nas</Link>
                    <Link to="/trainers" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Trenerzy</Link>
                    <Link to="pricing" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Cennik</Link>
                    <Link to="contact" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Kontakt</Link>
                </nav>
                <button>Dołącz</button>

            </div>
        </header>
    );
};

export default Header;
