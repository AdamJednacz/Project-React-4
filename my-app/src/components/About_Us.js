import React from 'react';
import img1 from "../assets/Zdjęcie_lady.webp"

const AboutUs = () => {
    return (
        <section className="about_us">
            <div className="container">
                <div className="row">
                    <div className="text">
                    <h1>O nas</h1>
                    <p>Historia obecnego Studia Treningowego POWER&Beauty rozpoczęła się kilka lat temu, kiedy to jego
                        właścicielem został Rafał Preis. Niewielką siłownię przekształcił w prawdziwy klub fitness, do
                        którego uczęszczają zarówno panowie, jak i panie w każdym wieku.
                        Obecnym właścicielem siłowni POWER&Beauty jest Justyna Kwiatkowska, która pracowała w klubie
                        przez kilka ostatnich lat.</p>
                    </div>
                    <img src={img1} alt=""/>
                </div>
                <div className="row">
                    Power&Beauty to nie tylko miejsce, to społeczność,która zapewnia naszym Klientom doskonałe warunki do treningów,progresów,pokonywania swoich ograniczeń oraz relaksu. Swoim Klientom zapewnia wręcz domową atmosferę – możecie Państwo przekonać się, że zawarte u nas znajomości i przyjaźnie zaprocentują w życiu codziennym.
                    Zapraszamy wszystkich! Panie i panów, dziewczęta i chłopców, młodych i starszych (choć wciąż młodych duchem). Każdy znajdzie zajęcia odpowiadające jego zainteresowaniom, potrzebom. Pod okiem instruktorów poprawicie kondycję, zapomnicie o troskach, a problemy zdrowotne przestaną stanowić wymówkę od podejmowania sportowych wyzwań.
                </div>
                <div className="row">
                    <h2>Przyjdźcie, sprawdźcie i zostańcie uczestnikami Studia Treningowego Power & Beauty</h2>
                    <p>Siłownia Power & Beauty posiada:</p>
                    <ul>
                        <li>250 m^2 przestrzeni sportowej,</li>
                        <li>strefa treningów grupowych, na której odbywają się zajęcia sportowe z różnych dziedzin, prowadzone przez wykwalifikowaną kadrę instruktorów,</li>
                        <li> miejsca parkingowe,</li>
                        <li>szatnie + prysznic,</li>
                        <li>wolne ciężary i urządzenia stacjonarne</li>
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
