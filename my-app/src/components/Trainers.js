import React from 'react';
import img1 from "../assets/trainers_1.png"
import img2 from "../assets/trainers_2.png"
import { Link as LinkR } from "react-router-dom";


const Trainers = () => {
    return (
        <section id="trainers">
            <div className="container">
                <div className="text">
                    <h1>Poznaj Naszych Trenerów</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. </p>
                </div>
                <div className="trainers__cards">
                    <LinkR to="/o_nas"  className="trainers__cards__card">
                    <img src={img1} alt=""/>
                        <p>Jan Kowlaski</p>
                    </LinkR>
                    <LinkR to="/o_nas"  className="trainers__cards__card">
                        <img src={img2} alt=""/>
                        <p>Jan Kowalski</p>
                    </LinkR>
                    <LinkR to="/o_nas"  className="trainers__cards__card">
                        <img src={img1} alt=""/>
                        <p>Jan Kowlaski</p>
                    </LinkR>
                    <LinkR to="/o_nas"  className="trainers__cards__card">
                        <img src={img2} alt=""/>
                        <p>Jan Kowalski</p>
                    </LinkR>
                    <LinkR to="/o_nas"  className="trainers__cards__card">
                        <img src={img1} alt=""/>
                        <p>Jan Kowlaski</p>
                    </LinkR>
                    <LinkR to="/o_nas"  className="trainers__cards__card">
                        <img src={img2} alt=""/>
                        <p>Jan Kowalski</p>
                    </LinkR>

                </div>
            </div>
        </section>
    );
};

export default Trainers;
