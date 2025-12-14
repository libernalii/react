import CourseCard from "./CourseCard";
import styles from "../styles/CoursesList.module.scss";

const CoursesList = ({ courses }) => (
  <div className={styles.list}>
    {courses.map(course => (
      <CourseCard key={course.id} {...course} />
    ))}
  </div>
);

export default CoursesList;
