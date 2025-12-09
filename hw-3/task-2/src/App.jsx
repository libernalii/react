import Schedules from "./components/Schedules";
import Schedule from "./components/Schedule";
import schedulesData from "./mocks/schedulesData";

function App() {

    const scheduleItems = schedulesData.map((lesson) => (
        <Schedule
            key={lesson.id}
            time={lesson.time}
            duration={lesson.duration}
            subject={lesson.subject}
            classroom={lesson.classroom}
            teacher={lesson.teacher}
            color={lesson.color}
        />
    ));

    return (
        <div className="app-container">
            <Schedules date="2025-12-05">
                {scheduleItems}
            </Schedules>
        </div>
    );
}

export default App;
