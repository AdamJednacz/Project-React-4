import React, {useEffect, useState} from 'react';
import logo from "../assets/logo.png"
import logo_w from "../assets/logo_white.png"
import { Link } from 'react-scroll';
import {Link as LinkR, useLocation, useNavigate} from "react-router-dom";

const Header = ({pageType, isDarkMode, toggleDarkMode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);


    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleOpenMenu = () => {
        setIsOpen(!isOpen);

    };
    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    // Dodanie nasłuchiwania scrolla
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleNavigateAndScroll = (target) => {
        if (pathname !== "/") {
            navigate("/");
        }
        setTimeout(() => {
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };






    return (
        <header className={`${isSticky ? 'sticky' : ''} ${pageType === "o_nas" ? 'about_us_header' : ''}${pageType === "grafik" ? 'table_header' : ''} ${pageType === "karty" ? 'cards_header' : ''}`}>
            <div className="container">
                <LinkR className="logo" to="/"><img src={isDarkMode ? logo_w : logo} alt=""/></LinkR>

                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleOpenMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`menu ${isOpen ? 'open' : ''}`}>
                    <LinkR to="/" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Strona Główna</LinkR>
                    <LinkR to="/o_nas" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">O nas</LinkR>
                    <LinkR to="/grafik" smooth={true} duration={500} onClick={handleCloseMenu}
                           className="menu_item">Grafik</LinkR>
                   <Link to="trenerzy" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('trainers'); handleCloseMenu(); }}
                          className="menu_item">Trenerzy</Link>

                    <Link to="cennik" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('pricing'); handleCloseMenu(); }}
                          className="menu_item">Cennik</Link>
                    <Link to="kontakt" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('contact'); handleCloseMenu(); }}
                          className="menu_item">Kontakt</Link>
                </nav>
                <Link to="kontakt" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('contact'); handleCloseMenu(); }}
                      ><button>Dołącz</button></Link>
                <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
        </header>
    );
};

export default Header;
