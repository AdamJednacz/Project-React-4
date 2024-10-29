import React from 'react';
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

import {useParams} from "react-router";
const Layout = () => {
    const { pageType } = useParams();

    return (
        <>
            <Header />

            {pageType === 'about_us' ? (
                <AboutUs />
            ) : (
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

            <Footer />
        </>
    );
};

export default Layout;
