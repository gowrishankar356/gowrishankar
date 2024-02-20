import React from "react";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 35) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`${styles.nav_bar} ${color ? styles.nav_bar_bg : ""}`}>
      <div className={styles.nav_bar_content}>
        <div className={styles.nav_bar_about}>
          <h2>Gowri Shankar Badugu</h2>
          {/* <h4>Software Developer Intern at Pringle Robitics Inc.</h4> */}
        </div>
        <div
          className={`${styles.nav_bar_sub_content} ${
            isActive ? styles.active : ""
          }`}
        >
          <ul>
            <li onClick={removeActive}>
              <a href="/">Home</a>
            </li>
          </ul>
          <ul>
            <li onClick={removeActive}>
              <a href="/skills">Skills</a>
            </li>
          </ul>
          <ul>
            <li onClick={removeActive}>
              <a href="/experience">Work Experience</a>
            </li>
          </ul>
          <ul>
            <li onClick={removeActive}>
              <a href="/projects">Featured Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </div>
  );
};

export default NavBar;
