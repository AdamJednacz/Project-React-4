import React, { useState } from 'react';
import useScrollAnimation from "./useScroolAnimation";

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track active card index

    const handleSetActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };
    useScrollAnimation(".questions");
    const questions = [
        {
            question: "OD CZEGO ZACZĄĆ NA SIŁOWNI?",
            answer: `Jeśli chodzi o początek treningu, pierwszą rzeczą powinna być rozgrzewka. Przygotuje ona nasz
                organizm do nadchodzącego wysiłku. Dobrze przeprowadzona rozgrzewka znacznie zmniejszy
                ryzyko urazów. Na początku powinniśmy podnieść temperaturę naszego ciała np. poprzez 10-15
                minut biegania na bieżni. Później warto dogrzać mięśnie, które będą najbardziej zaangażowane
                w dzisiejszym treningu.`
        },
        {
            question: "CZY POTRZEBUJE TRENERA I PLAN TRENINGOWY?",
            answer: `Na samym początku warto skorzystać z kilku spotkań z trenerem personalnym, pokaże nam on jak
                poprawnie wykonywać ćwiczenia oraz jak planować trening. Jednakże nie jest to konieczność,
                śmiało możemy po prostu przyjść i rozpocząć trenowanie samemu.`
        },
        {
            question: "JAKI TRENING WYBRAĆ DLA OSÓB POCZĄTKUJĄCYCH?",
            answer: `Najlepszym wyborem dla osób początkujących będzie trening Full Body Workout, który pozwala
                zaangażować całe ciało podczas jednej sesji treningowej. Na początku taki trening całego
                ciała będzie idealny do większości naszych celów. Jest to trening ogólnorozwojowy, który nie
                tylko spowoduje, że nasza sylwetka się poprawi, ale również sprawi, że będziemy
                sprawniejsi.`
        },
        {
            question: "JAK ĆWICZYĆ ŻEBY SCHUDNĄĆ?",
            answer: `Tak naprawdę każda forma aktywności fizycznej spala kalorie. Spalanie tkanki tłuszczowej
                następuje wtedy, gdy utrzymamy deficyt kaloryczny, czyli dostarczymy mniej kalorii niż
                zużyjemy w ciągu dnia. Najwięcej kalorii spalają treningi cardio oraz interwałowe, jednakże
                trening siłowy również pozwala nam spalić całkiem dużą ilość kalorii. Najważniejszym podczas
                odchudzania jest dieta, dzięki której będziemy w stanie utrzymywać deficyt kaloryczny,
                trening pomaga nam go tylko zwiększyć.`
        },
        {
            question: "JAK CZĘSTO TRENOWAĆ?",
            answer: `Częstym błędem początkujących jest zbyt duży zapał do treningów siłowych. Niektóre osoby
                najchętniej trenowałyby codziennie, jednakże wbrew pozorom nie jest to dobry pomysł. Na
                samym początku najlepiej jest trenować 2-3 razy w tygodniu, a resztę czasu przeznaczyć na
                regenerację. Wraz z upływem czasu i adaptacją naszego ciała będziemy mogli zwiększać ilość
                jednostek treningowych w naszym planie treningowym.`
        }
    ];

    return (
        <section id="questions">
            <h1>Najczęściej zadawane pytania:</h1>
            <h3>Kliknij i zobacz odpowiedź</h3>
            <div className="questions">
                {questions.map((q, index) => (
                    <div
                        key={index}
                        onClick={() => handleSetActive(index)}
                        className={`question__card ${activeIndex === index ? 'active' : ''}`}
                    >
                        <h2>{q.question}</h2>
                        <p className={`question__card__p ${activeIndex === index ? 'active' : ''}`}>
                            {q.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Questions;

