import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Online Courses</h1>
      <p>Learn modern web development</p>
    </header>
  );
};

export default Header;
