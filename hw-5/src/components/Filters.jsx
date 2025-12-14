import styles from "../styles/Filters.module.scss";

const Filters = ({ level, setLevel, onlyFree, setOnlyFree, onlyNew, setOnlyNew }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <button onClick={() => setLevel("all")} className={level === "all" ? styles.active : ""}>All</button>
        <button onClick={() => setLevel("beginner")} className={level === "beginner" ? styles.active : ""}>Beginner</button>
        <button onClick={() => setLevel("intermediate")} className={level === "intermediate" ? styles.active : ""}>Intermediate</button>
        <button onClick={() => setLevel("advanced")} className={level === "advanced" ? styles.active : ""}>Advanced</button>
      </div>

      <label className={styles.freeCheckbox}>
        <input type="checkbox" checked={onlyFree} onChange={() => setOnlyFree(!onlyFree)} />
        <span>Only free</span>
      </label>

      <label className={styles.newCheckbox}>
        <input type="checkbox" checked={onlyNew} onChange={() => setOnlyNew(!onlyNew)} />
        <span>Only new</span>
      </label>
    </div>
  );
};

export default Filters;
