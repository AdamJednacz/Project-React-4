import React from 'react';
import star from "../assets/star.png";
import left from "../assets/left_button.png";
import right from "../assets/right_button.png";

const Opinions = () => {
    const data = [
        { name: 'Anka', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' },
        { name: 'Maciek', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' },
        { name: 'Kinga', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' },
        { name: 'Krystian', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' },
        { name: 'Gosia', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' }
    ];


    return (
        <section id="opinions">
            <div className="container">
                <div className="text">
                    <h1>Opinie od was</h1>
                </div>
                <div className="opinions_cards">
                    {data.map((d) => (
                        <div  className="opinions_cards_card">
                            <h2>{d.name}</h2>
                            <div className="stars">
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                            <p>{d.text}</p>
                        </div>
                    ))}
                </div>
                <div className="opinions_cards_buttons">
                    <div
                        className="opinions_cards_buttons_button"
                        style={{
                            backgroundImage: `url(${left})`, backgroundSize: 'auto',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div
                        className="opinions_cards_buttons_button"
                        style={{
                            backgroundImage: `url(${right})`, backgroundSize: 'auto',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Opinions;
