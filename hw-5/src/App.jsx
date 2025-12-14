import { useState } from "react";
import { courses } from "./mocks/coursesData"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import CoursesList from "./components/CoursesList";

import styles from "./App.module.scss";

function App() {
  const [level, setLevel] = useState("all");
  const [onlyFree, setOnlyFree] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);

  const filteredCourses = courses.filter(course => {
    if (level !== "all" && course.level !== level) return false;
    if (onlyFree && !course.isFree) return false;
    if (onlyNew && !course.isNew) return false;
    return true;
  });

  return (
    <div className={styles.app}>
      <Header />
      <Filters
        level={level}
        setLevel={setLevel}
        onlyFree={onlyFree}
        setOnlyFree={setOnlyFree}
        onlyNew={onlyNew}
        setOnlyNew={setOnlyNew}
      />
      <CoursesList courses={filteredCourses} />
      <Footer />
    </div>
  );
}

export default App;
