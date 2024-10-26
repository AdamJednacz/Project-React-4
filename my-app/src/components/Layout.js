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

const Layout = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Stats/>
            <Why_Us/>
            <Trainers/>
            <Coaches/>
            <Pricing/>
            <Opinions/>
            <Contact/>
        </>
    );
};

export default Layout;
