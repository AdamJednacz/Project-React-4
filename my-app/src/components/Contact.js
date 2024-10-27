import React from 'react';
import bg from '../assets/contact_bg.png'


const Contact = () => {
    return (
        <section id="contact" style={{
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
                <form>
                    <h1>Napisz do nas!</h1>
                    <div className="row">
                        <input type="text" id="name" name="name" placeholder="Imię"/>
                        <input type="text" id="surname" name="surname" placeholder="Nazwisko"/>
                    </div>
                    <div className="row">
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="number" id="number" name="number" placeholder="Nr.Telefonu"/>
                    </div>
                    <textarea rows={5}  placeholder="Wiadomość"/>

                    <button type="submit">Wyślij</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;