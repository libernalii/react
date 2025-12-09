import "./Schedule.css";

const Schedule = ({ time, duration, subject, classroom, teacher, color }) => {
    return (
        <div className="schedule-item">
            <div className="schedule-color-bar" style={{ backgroundColor: color }}></div>

            <div className="schedule-content">
                <div className="schedule-time">
                    <span>{time}</span>
                    <small>{duration}</small>
                </div>

                <div className="schedule-details">
                    <h3>{subject}</h3>
                    <p>{classroom}</p>
                    <p>{teacher}</p>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
