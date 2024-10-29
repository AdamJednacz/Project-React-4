import React, {useEffect, useState} from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-scroll';
import {Link as LinkR, useLocation, useNavigate} from "react-router-dom";

const Header = () => {
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
        <header className={`${isSticky ? 'sticky' : ''}`}>
            <div className="container">
            <img src={logo} alt=""/>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleOpenMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`menu ${isOpen ? 'open' : ''}`}>
                    <LinkR to="/" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Strona Główna</LinkR>
                    <LinkR to="/about_us" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">O nas</LinkR>

                   <Link to="trainers" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('trainers'); handleCloseMenu(); }}
                          className="menu_item">Trenerzy</Link>

                    <Link to="pricing" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('pricing'); handleCloseMenu(); }}
                          className="menu_item">Cennik</Link>
                    <Link to="contact" smooth={true} duration={500} onClick={() => { handleNavigateAndScroll('contact'); handleCloseMenu(); }}
                          className="menu_item">Kontakt</Link>
                </nav>
                <button>Dołącz</button>

            </div>
        </header>
    );
};

export default Header;
