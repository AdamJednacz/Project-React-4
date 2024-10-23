import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Stats from "./Stats";
import Why_Us from "./Why_Us";
import Trainers from "./Trainers";

const Layout = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Stats/>
            <Why_Us/>
            <Trainers/>
        </>
    );
};

export default Layout;
