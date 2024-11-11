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


                    <Link to="cennik" smooth={true} duration={500} onClick={() => {
                        handleNavigateAndScroll('pricing');
                        handleCloseMenu();
                    }}
                          className="menu_item">Cennik</Link>
                    <Link to="kontakt" smooth={true} duration={500} onClick={() => {
                        handleNavigateAndScroll('contact');
                        handleCloseMenu();
                    }}
                          className="menu_item">Kontakt</Link>
                </nav>
                <div className="buttons">
                <Link className="contact_link" to="kontakt" smooth={true} duration={500} onClick={() => {
                    handleNavigateAndScroll('contact');
                    handleCloseMenu();
                }}
                >
                    <button className="contact">Dołącz</button>
                </Link>
                <label htmlFor="theme" className={`theme ${isOpen ? 'open' : ''}`}>

                    <span className="theme__toggle-wrap ">
                        <input
                            id="theme"
                            className="theme__toggle"
                            type="checkbox"
                            role="switch"
                            name="theme"
                            value="dark"
                            checked={isDarkMode}  // Bind to the dark mode state
                            onChange={toggleDarkMode}  // Toggle the dark mode on change
                        />
                        <span className="theme__fill"></span>
                        <span className="theme__icon">
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                        </span>
                    </span>

                </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
