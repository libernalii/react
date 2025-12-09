import "./Schedules.css";

const Schedules = ({ children, date }) => {

    let parsedDate = new Date(date);

    if (isNaN(parsedDate)) {
        console.warn("Некоректна дата! Використовую поточну дату.");
        parsedDate = new Date();
    }

    const daysOfWeek = [
        "неділю",
        "понеділок",
        "вівторок",
        "середн",
        "четвер",
        "пʼятницю",
        "суботу"
    ];

    const weekday = daysOfWeek[parsedDate.getDay()];


    const months = [
        "січня", "лютого", "березня", "квітня", "травня", "червня",
        "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
    ];

    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = months[parsedDate.getMonth()];
    const year = parsedDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;


    return (
        <div className="schedules-wrapper">
            <h1>Розклад на {weekday}</h1>
            <p className="schedules-date">{formattedDate}</p>

            <hr />

            <div className="schedules-list">
                {children}
            </div>
        </div>
    );
};

export default Schedules;
