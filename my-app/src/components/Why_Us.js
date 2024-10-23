import React from 'react';
import icon_1 from "../assets/icon_1.png"
import icon_2 from "../assets/icon_2.png"
import icon_3 from "../assets/icon_3.png"
import icon_4 from "../assets/icon_4.png"

import img_1 from "../assets/why_us_1.png"
import img_2 from "../assets/why_us_2.png"
import img_3 from "../assets/why_us_3.png"


const WhyUs = () => {
    return (
        <section id="why_us">
            <div className="container">
                <div className="text">
                    <h1>Dlaczego My?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="why_us__content">
                    <div className="why_us__content__cards">
                        <div className="why_us__content__cards__card">
                            <img src={icon_1} alt="" />
                            <div className="why_us__content__cards__card__text">
                                <h2>Kadra Trenerska</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>
                            </div>
                        </div>
                        <div className="why_us__content__cards__card">
                            <img src={icon_2} alt=""/>
                            <div className="why_us__content__cards__card__text">
                                <h2>Wiele Akcesoriów</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>

                            </div>
                        </div>
                        <div className="why_us__content__cards__card">
                            <img src={icon_3} alt=""/>
                            <div className="why_us__content__cards__card__text">
                                <h2>Zniżki Członkowskie</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>

                            </div>
                        </div>
                        <div className="why_us__content__cards__card">
                            <img src={icon_4} alt=""/>
                            <div className="why_us__content__cards__card__text">
                                <h2>Godziny Otwarcia</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
                    <div className="why_us__content__imgs">
                        <div className="col">
                        <img src={img_1} alt=""/>
                        <img src={img_2} alt=""/>

                        </div>
                        <div className="col">
                            <img className="img_3" src={img_3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
