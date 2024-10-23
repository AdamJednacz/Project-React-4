import React from 'react';
import img1 from "../assets/trainers_1.png"

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
                    <div className="trainers__cards__card">
                    <img src={img1} alt=""/>
                    </div>
                    {/*<div style={{backgroundImage:`url(${img1})`}} className="trainers__cards__card"></div>*/}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
