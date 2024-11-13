import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Opinions = () => {
    const data = [
        { name: 'Anka', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { name: 'Maciek', stars: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { name: 'Kinga', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { name: 'Krystian', stars: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { name: 'Gosia', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ];

    return (
        <section id="opinions">
            <div className="container">
                <div className="text">
                    <h1>Opinie od was</h1>
                </div>

                {/* Swiper Component with Navigation, Pagination, and Responsive Breakpoints */}
                <Swiper
                    className="opinions_cards"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    navigation={{
                        prevEl: '.prev-button',
                        nextEl: '.next-button',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 50 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                        1280: { slidesPerView: 4, spaceBetween: 50 },
                    }}
                >
                    {data.map((d, index) => (
                        <SwiperSlide key={index} className="opinions_cards_card">
                            <h2>{d.name}</h2>
                            <div className="stars">
                                {[...Array(d.stars)].map((_, i) => (
                                    <FontAwesomeIcon className="star" key={i} icon={faStar} />
                                ))}
                            </div>
                            <p>{d.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="opinions_cards_buttons">
                    <FontAwesomeIcon className="prev-button opinions_cards_buttons_button" icon={faAngleLeft} />
                    <FontAwesomeIcon className="next-button opinions_cards_buttons_button" icon={faAngleRight} />
                </div>
            </div>
        </section>
    );
};

export default Opinions;
