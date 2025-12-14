import clsx from "clsx";
import styles from "../styles/CourseCard.module.scss";

const CourseCard = ({ title, level, duration, isFree, isNew }) => {
    return (
        <div
            className={clsx(styles.card, {
                [styles.free]: isFree,
                [styles.paid]: !isFree,
                [styles.levelBeginner]: level === "beginner",
                [styles.levelIntermediate]: level === "intermediate",
                [styles.levelAdvanced]: level === "advanced",
                [styles.new]: isNew,
            })}
        >
            <div className={styles.badges}>
                {isFree && <span className={styles.freeBadge}>FREE</span>}
                {isNew && <span className={styles.newBadge}>NEW</span>}
            </div>

            <h3>{title}</h3>
            <p>Level: {level}</p>
            <p>Duration: {duration} hours</p>
        </div>
    );
};

export default CourseCard;
