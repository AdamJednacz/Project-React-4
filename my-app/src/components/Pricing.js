import React, {useState} from 'react';

const Pricing = () => {
    const [activeSection, setActiveSection] = useState('gym'); // Default section

    return (
        <section id="pricing">
            <div className="container">
                <div className="row">
                    <div className="text">
                        <h2>Cennik</h2>
                        <h1>Dołącz do nas!</h1>
                        <p>Zawieszenie karnetu - 20zł</p>
                    </div>
                    <div className="buttons">
                        <button className={`${activeSection === 'group' ? 'active':''}`} onClick={() => setActiveSection('group')}>Grupowe</button>
                        <button className={`${activeSection === 'gym' ? 'active':''}`} onClick={() => setActiveSection('gym')}>Siłownia</button>
                        <button className={`${activeSection === 'special' ? 'active':''}`} onClick={() => setActiveSection('special')}>Special</button>
                    </div>
                </div>
                <div className="row">
                    <div className="cards">
                        {activeSection === 'group' && (
                            <>
                                <div className="card">
                                    <h2>Wejście jednorazowe</h2>
                                    <p><span>40 PLN</span> / jednorazowo</p>
                                    <p>Wypróbuj naszę zajęcia</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Dostęp do wszystkich zajęć
                                            grupowych</p></li>
                                        <li className="has_not"><p className="li_text">Dostęp do siłowni</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                    <h2>4 wejścia</h2>
                                    <p><span>140 PLN</span> / jednorazowo</p>
                                    <p>Czas wykorzystania 30 dni</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Dostęp do wszystkich zajęć
                                            grupowych</p></li>
                                        <li className="has_not"><p className="li_text">Dostęp do siłowni</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                    <h2>8 wejść</h2>
                                    <p><span>180 PLN</span> / jednorazowo</p>
                                    <p>Czas wykorzystania 30 dni</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Dostęp do wszystkich zajęć grupowych</p></li>
                                        <li className="has_not"><p className="li_text">Dostęp do siłowni</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                    <h2>12 wejść</h2>
                                    <p><span>250 PLN</span> / jednorazowo</p>
                                    <p>Czas wykorzystania 30 dni</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Dostęp do wszystkich zajęć grupowych</p></li>
                                        <li className="has_not"><p className="li_text">Dostęp do siłowni</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                            </>
                        )}
                        {activeSection === 'gym' && (
                            <>
                                <div className="card">
                                    <h2>Wejście Jednorazowe</h2>
                                    <p><span>30 PLN</span> / jednorazowo</p>
                                    <p>Wypróbuj naszą siłownię</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Jednorazowe wejście</p></li>
                                        <li className="has"><p className="li_text">Dostęp do siłowni przez 24H </p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia grupowe</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia z trenerem</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                    <h2>Open 1 miesiąc</h2>
                                    <p><span>160 PLN</span> / jednorazowo</p>
                                    <p>Zacznij swoją przygodę</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Nieograniczona liczba wejść</p></li>
                                        <li className="has"><p className="li_text">Dostęp do siłowni przez miesiąc</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia grupowe</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia z trenerem</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                <h2>Open 3 miesiące</h2>
                                    <p><span>450 PLN</span> / jednorazowo</p>
                                    <p>Przejdź metamorfozę</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Nieograniczona liczba wejść</p></li>
                                        <li className="has"><p className="li_text">Dostęp do siłowni przez 3 miesiące</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia grupowe</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia z trenerem</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                <h2>Open 6 miesięcy</h2>
                                    <p><span>950 PLN</span> / jednorazowo</p>
                                    <p>Oszczędź 7%</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Nieograniczona liczba wejść</p></li>
                                        <li className="has"><p className="li_text">Dostęp do siłowni przez 6 miesięcy</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia grupowe</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia z trenerem</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                <h2>Open 12 + 1 miesięcy</h2>
                                    <p><span>1560 PLN</span> / jednorazowo</p>
                                    <p>Oszczędź 25%</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Nieograniczona liczba wejść</p></li>
                                        <li className="has"><p className="li_text">Dostęp do siłowni przez 13 miesięcy</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia grupowe</p></li>
                                        <li className="has_not"><p className="li_text">Zajęcia z trenerem</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>

                            </>
                        )}
                        {activeSection === 'special' && (
                            <>
                                <div className="card">
                                    <h2>Open siłownia + zajęcia grupowe 1 mies.</h2>
                                    <p><span>300 PLN</span> / jednorazowo</p>
                                    <p>Wypróbuj wszystko</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Dostęp do siłowni przez 1 miesiąc</p>
                                        </li>
                                        <li className="has"><p className="li_text">Zajęcia grupowe</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                                <div className="card">
                                    <h2>Trenerski Open</h2>
                                    <p><span>500 PLN</span> / jednorazowo</p>
                                    <p>Trenuj z najlepszymi</p>
                                    <ul>
                                        <li className="has"><p className="li_text">Treningi personalne z trenerem</p></li>
                                        <li className="has"><p className="li_text">Gwarancja stałej ceny karnetu</p></li>
                                    </ul>
                                    <button className="card_button">Kontakt</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
