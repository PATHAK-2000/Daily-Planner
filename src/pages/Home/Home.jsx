import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.home__main}>
      <div className={styles.home__title}>
        <h1>Organize your work and life, finally!!</h1>
        <p>
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </p>
      </div>
      <div className={styles.sign_up}>
        <Link to="/signup" className={styles.btn}>
          {" "}
          <button>Sign Up</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
