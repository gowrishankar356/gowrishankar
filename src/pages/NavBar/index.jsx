import React from "react";
import styles from "./styles.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_bar_content}>
        <div className={styles.nav_bar_about}>
          <h2>Gowri Shankar Badugu | </h2>
          <h4>Software Developer Intern at Pringle Robitics Inc.</h4>
        </div>
        <div className={styles.nav_bar_sub_content}>
        <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>          
          <ul>
            <li>
              <a href="/education">Education</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/experience">Work Experience</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/projects">Featured Projects</a>
            </li>
          </ul>
          <img src="./images/profile.jpeg"></img>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
