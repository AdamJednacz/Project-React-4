import React from 'react';
import img1 from "../assets/trainers_1.png"
import img2 from "../assets/trainers_2.png"


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
                        <p>Imię Nazwisko 1</p>
                    </div>
                    <div className="trainers__cards__card">
                        <img src={img2} alt=""/>
                        <p>Imię Nazwisko 2</p>
                    </div>
                    <div className="trainers__cards__card">
                        <img src={img1} alt=""/>
                        <p>Imię Nazwisko 3</p>
                    </div>
                    <div className="trainers__cards__card">
                        <img src={img2} alt=""/>
                        <p>Imię Nazwisko 4</p>
                    </div>
                    <div className="trainers__cards__card">
                        <img src={img1} alt=""/>
                        <p>Imię Nazwisko 5</p>
                    </div>
                    <div className="trainers__cards__card">
                        <img src={img2} alt=""/>
                        <p>Imię Nazwisko 6</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Trainers;
