import React from 'react';

const Table = () => {
    const schedule = {
        "Poniedziałek": [
            { time: "17:00", activity: "Zdrowy Kręgosłup (Justyna)" },
            { time: "18:00", activity: "Joga (Janek)" },
            { time: "19:00", activity: "Brazylijskie Pośladki (Justyna)" },
            { time: "20:00", activity: "Zdrowy Kręgosłup (Justyna)" },
        ],
        "Wtorek": [
            { time: "08:00", activity: "ABT brzuch,pośladki,uda (Kuba,Łukasz)" },
            { time: "18:00", activity: "Trening Funkcjonalny (Kuba)" },
            { time: "19:00", activity: "Zumba (Natalia)" },
            { time: "20:00", activity: "Brzuch, Uda, Pośladki (Natalia)" },
        ],
        "Środa": [
            { time: "18:00", activity: "Tabata (Kuba)" },
            { time: "19:00", activity: "Joga (Janek)" },
        ],
        "Czwartek": [
            { time: "08:00", activity: "ABT brzuch,pośladki,uda (Kuba,Łukasz)" },
            { time: "18:00", activity: "Trening Funkcjonalny (Kuba)" },
            { time: "19:00", activity: "Zumba (Natalia)" },
            { time: "20:00", activity: "Stepy (Natalia)" },
        ],
        "Piątek": [

            { time: "18:00", activity: "Mocny Brzuch (Justyna)" },
            { time: "19:00", activity: "Zdrowy Kręgosłup (Justyna)" },
            { time: "20:00", activity: "Zdrowy Kręgosłup (Justyna)" },
        ],
    };

    return (
        <section className="table">
            <div className="container">
                {/* Desktop Table */}
                <table className="desktop">
                    <thead>
                    <tr>
                        <th>Godzina</th>
                        <th>Poniedziałek</th>
                        <th>Wtorek</th>
                        <th>Środa</th>
                        <th>Czwartek</th>
                        <th>Piątek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...new Set(Object.values(schedule).flat().map(item => item.time))].sort().map(time => (
                        <tr key={time}>
                            <td>{time}</td>
                            {Object.keys(schedule).map(day => (
                                <td key={`${day}-${time}`} data-label={day}>
                                    {schedule[day].find(item => item.time === time)?.activity || ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Mobile Collapsible View */}
                <div className="mobile">
                    {Object.entries(schedule).map(([day, events]) => (
                        <details key={day}>
                            <summary>{day}</summary>
                            {events.map(({ time, activity }) => (
                                <div key={`${day}-${time}`} className="event">
                                    <span className="time">{time}</span>
                                    <span className="activity">{activity}</span>
                                </div>
                            ))}
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Table;
