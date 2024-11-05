import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faStar} from "@fortawesome/free-solid-svg-icons";

const Opinions = () => {
    const data = [
        { name: 'Anka', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { name: 'Maciek', stars: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { name: 'Kinga', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { name: 'Krystian', stars: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { name: 'Gosia', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];

    return (
        <section id="opinions">
            <div className="container">
                <div className="text">
                    <h1>Opinie od was</h1>
                </div>
                <div className="opinions_cards">
                    {data.map((d) => (
                        <div key={d.name} className="opinions_cards_card">
                            <h2>{d.name}</h2>
                            <div className="stars">
                                {[...Array(d.stars)].map((_, i) => (
                                    <FontAwesomeIcon className="star" key={i} icon={faStar} />
                                ))}
                            </div>
                            <p>{d.text}</p>
                        </div>
                    ))}
                </div>
                <div className="opinions_cards_buttons">
                    <FontAwesomeIcon className="opinions_cards_buttons_button" icon={faAngleLeft} />
                    <FontAwesomeIcon className="opinions_cards_buttons_button" icon={faAngleRight} />
                </div>
            </div>
        </section>
    );
};

export default Opinions;
