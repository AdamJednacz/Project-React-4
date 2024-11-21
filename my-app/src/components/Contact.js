import React, { useRef, useState } from 'react';
import bg from '../assets/contact_bg.png';
import { faArrowsRotate, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollAnimation from "./useScroolAnimation";

const Contact = () => {
    const buttonRef = useRef(null);
    const [isError, setIsError] = useState(false);

    useScrollAnimation(".text , .form");

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const surname = e.target.surname.value.trim();
        const email = e.target.email.value.trim();
        const number = e.target.number.value.trim();
        const message = e.target.querySelector('textarea').value.trim();

        const button = buttonRef.current;

        if (!name || !surname || !email || !number || !message) {
            setIsError(true);
            button.classList.add('error');
        } else {
            button.classList.add('active');
            setTimeout(() => {
                button.classList.add('finished');
            }, 2000);
        }
    };

    return (
        <section id="kontakt" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="container">
                <div className="text">
                    <h2>Zadzwoń do nas</h2>
                    <h1>+48 123 456 789</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Napisz do nas!</h1>
                    <div className="row">
                        <input type="text" id="name" name="name" placeholder="Imię" required />
                        <input type="text" id="surname" name="surname" placeholder="Nazwisko" required />
                    </div>
                    <div className="row">
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            placeholder="Nr. Telefonu"
                            pattern="[0-9]{9,15}"
                            inputMode="numeric"
                            required
                        />
                    </div>
                    <textarea rows={5} placeholder="Wiadomość" required />

                    <button className="button" ref={buttonRef}>
                        <span className="submit">Wyślij</span>
                        <span className="loading"><FontAwesomeIcon className="i" icon={faArrowsRotate} /></span>
                        <span className="check"><FontAwesomeIcon className="i" icon={faCheck} /></span>
                        <span className="error-icon"><FontAwesomeIcon className="i" icon={faTimes}/></span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
