import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Stats from "./Stats";
import Why_Us from "./Why_Us";
import Trainers from "./Trainers";
import Coaches from "./Coaches";
import Pricing from "./Pricing";
import Opinions from "./Opinions";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutUs from "./About_Us";
import Cards from "./Cards"; // Import the Cards component

import { useParams } from "react-router";
import Table from "./Table";

const Layout = () => {
    const { pageType } = useParams();
    const [isDarkMode,setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setDarkMode(newDarkMode);
        document.body.classList.toggle('darkmode', newDarkMode);
        localStorage.setItem('darkmode', newDarkMode);

    };
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkmode') === 'true';
        setDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.body.classList.add('darkmode');
        }
        console.log('Loaded dark mode from storage:', savedDarkMode);
    }, []);

    return (
        <>
            <Header pageType={pageType} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {pageType === 'o_nas' ? (
                <AboutUs />
            ) : pageType === 'karty' ? (
                <Cards /> // Render Cards component when pageType is 'cards'
            ) : pageType ==='grafik'?(
                <Table/>
            ): (
                <>
                    <Main />
                    <Stats />
                    <Why_Us />
                    <Trainers />
                    <Coaches />
                    <Pricing />
                    <Opinions />
                    <Contact />
                </>
            )}

            <Footer isDarkMode={isDarkMode}  />
        </>
    );
};

export default Layout;
