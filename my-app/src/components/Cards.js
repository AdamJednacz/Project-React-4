import React from 'react';

import img1 from "../assets/karta-multisport-light.webp"
import img2 from "../assets/karta-multiactive.webp"
import img3 from "../assets/karta-multisport_classic.webp"
import img4 from "../assets/karta-multisport-plus.webp"
import img5 from "../assets/karta-multisport_student.webp"
import img6 from "../assets/karta-medicover_sport.webp"
import img7 from "../assets/karta-fitprofit.webp"
import img8 from "../assets/karta-fitsport.webp"
import img9 from "../assets/karta-vanitystyle.webp"
import img10 from "../assets/karta-pzu_sport.webp"

const Cards = () => {
    const cards = [img1, img2, img3, img4, img5, img6, img7, img8, img9,img10]
    return (
        <section id="cards">
            <div className="container">
                {cards.map((card, i) => (
                    <img src={card} alt=""/>
                ))}
            </div>
        </section>
    );
};

export default Cards;
