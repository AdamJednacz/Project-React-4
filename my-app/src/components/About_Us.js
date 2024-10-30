import React from 'react';
import img1 from "../assets/Zdjęcie_lady.webp"
import img2 from "../assets/gym.webp"

const AboutUs = () => {
    return (
        <section className="about_us">
            <div className="container">
                <div className="row">
                    <img className="img1" src={img1} alt=""/>
                    <div className="text">

                        <h1>O nas</h1>

                        <p>Historia obecnego Studia Treningowego Power & Beauty rozpoczęła się kilka lat temu, kiedy to
                            jego
                            właścicielem został Rafał Preis. Niewielką siłownię przekształcił w prawdziwy klub fitness,
                            do
                            którego uczęszczają zarówno panowie, jak i panie w każdym wieku.
                            Obecnym właścicielem siłowni Power & Beauty jest Justyna Kwiatkowska, która pracowała w
                            klubie
                            przez kilka ostatnich lat.</p>
                    </div>

                </div>
                <div className="row">
                    <img className="img2" src={img2} alt=""/>
                    <div className="text">

                        <p>Power & Beauty to nie tylko miejsce, to społeczność,która zapewnia naszym Klientom doskonałe
                            warunki do treningów,progresów,pokonywania swoich ograniczeń oraz relaksu. Swoim Klientom
                            zapewnia wręcz domową atmosferę – możecie Państwo przekonać się, że zawarte u nas znajomości
                            i przyjaźnie zaprocentują w życiu codziennym.</p>
                        <p>Zapraszamy wszystkich! Panie i panów, dziewczęta i chłopców, młodych i starszych (choć wciąż
                            młodych duchem). Każdy znajdzie zajęcia odpowiadające jego zainteresowaniom, potrzebom. Pod
                            okiem instruktorów poprawicie kondycję, zapomnicie o troskach, a problemy zdrowotne
                            przestaną stanowić wymówkę od podejmowania sportowych wyzwań.</p>
                    </div>
                </div>
                <div className="row">

                    <h2>Sprawdźcie co nasze studio ma do zaoferowania</h2>
                    <p className="p_row">Siłownia Power & Beauty posiada:</p>

                    <ul>
                        <li>250 m<sup>2</sup> przestrzeni sportowej,</li>
                        <li>strefa treningów grupowych</li>
                        <li> miejsca parkingowe,</li>
                        <li>szatnie + prysznic,</li>
                        <li>wolne ciężary i maszyny</li>
                    </ul>
                </div>
                <div className="row">
                    <h1>Poznaj Nasz Zespół</h1>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
