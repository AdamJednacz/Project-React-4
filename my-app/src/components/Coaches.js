import React from 'react';

import img1 from "../assets/coaches_1.png"
import img2 from "../assets/coaches_2.png"
import {Link as LinkR} from "react-router-dom";
import useScrollAnimation from "./useScroolAnimation";
const Coaches = () => {

    useScrollAnimation(".coaches_imgs , .text");

    return (
        <section id="coaches">
            <div className="container">
                <div className="coaches_imgs">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                </div>
                <div className="text">
                    <h2>Poszukujesz Mentora ?</h2>
                    <h1>Menotrzy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <LinkR to="/o_nas" smooth={true} duration={500}><button>Dowiedz się więcej</button></LinkR>
                </div>
            </div>
        </section>
    );
};

export default Coaches;
