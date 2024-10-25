import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing">
            <div className="container">
                <div className="row">
                    <div className="text">
                        <h2>Cennik</h2>
                        <h1>Dołącz do nas!</h1>
                    </div>
                    <div className="buttons">
                        <button>Siłownia</button>
                        <button>Zajęcia Grupowe</button>
                        <button>Special</button>
                    </div>
                </div>
                <div className="row">
                    <div className="cards">
                        <div className="card">
                            <h2>Wejście Jednorazowe</h2>
                            <p><span>30PLN</span>/month</p>
                            <p>Wypróbuj naszą siłownie</p>
                            <ul>
                                <li>Pełny dostęp do siłowni</li>
                                <li>Nielimitowana liczba wejśc przez 24H</li>
                            </ul>
                    </div>
                    <div className="card">

                    </div>
                        <div className="card">

                        </div>
                        <div className="card">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
